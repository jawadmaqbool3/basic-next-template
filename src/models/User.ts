// models/User.ts
import mongoose from "mongoose";
import User, { UserRead } from "@/interfaces/Models/User";
import type { CreateUserRequest } from "@/types/Request";
import UserSchema from "@/schemas/User";
import { filterUserKeys } from "@/config/FilterInterfaces";

const model: string = "users";

const Model = mongoose.models[model] || mongoose.model(model, UserSchema);

export async function create(request: CreateUserRequest): Promise<User> {
  console.log("request", filterUserKeys(request));
  // return await Model.create(request);
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
