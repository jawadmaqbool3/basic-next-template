// models/User.ts
import mongoose from "mongoose";
import User, { UserRead } from "@/interfaces/Models/User";
import type { TCreateUserRequest } from "@/types/Requests/CreateUser";
import { filterRequestKeys } from "@/types/Requests/CreateUser";
import UserSchema from "@/schemas/User";
import { hashPassword } from "@/config/Utilities";

const model: string = "users";

const Model = mongoose.models[model] || mongoose.model(model, UserSchema);

export async function create(request: TCreateUserRequest): Promise<User> {
  
  const filterRequest = filterRequestKeys(request);
  
  filterRequest.password = await hashPassword(filterRequest.password);
  
  return  Model.create(filterRequest);
}

export async function list(): Promise<UserRead[]> {
  return await Model.aggregate<UserRead>([
    {
      $project: {
        name: { $concat: ["$first_name", " ", "$last_name"] },
        _id: 1,
        first_name: 1,
        last_name: 1,
        email: 1,
        createdAt: 1,
      },
    },
  ]);
}

export async function searchById(id: string): Promise<User | null> {
  return await Model.findById<User>(id);
}

export async function searchByEmail(email: string): Promise<User | null> {
  return Model.findOne<User>({
    email: email,
  });
}

export async function update(
  id: string,
  user: Partial<User>
): Promise<boolean | null> {
  return await Model.findByIdAndUpdate(id, user);
}

export async function remove(id: string): Promise<boolean | null> {
  return await Model.findByIdAndDelete(id);
}
