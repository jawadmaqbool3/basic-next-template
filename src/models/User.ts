// models/User.ts
import mongoose from "mongoose";
import User, { UserRead } from "@/interfaces/Models/User";
import RegistrationRequest from "@/interfaces/Requests/Registration";
import UserSchema from "@/schemas/User";

const model: string = "users";

const Model = mongoose.models[model] || mongoose.model(model, UserSchema);

export async function create(request: RegistrationRequest): Promise<User> {
  return await Model.create<User>(request);
}

export async function list(): Promise<UserRead[]> {
  return await Model.aggregate<UserRead>([
    {
      $project: {
        name: { $concat: ["$first_name", " ", "$last_name"] },
        _id: 1,
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
