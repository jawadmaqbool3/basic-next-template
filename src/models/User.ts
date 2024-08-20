// models/User.ts
import mongoose from "mongoose";
import type User from "@/interfaces/Models/User";
import type RegistrationRequest from "@/interfaces/Requests/Registration";
import UserSchema from "@/schemas/User";
import LoginRequest from "@/interfaces/Requests/Login";

const model: string = "users";

const Model = mongoose.model(model, UserSchema);

export async function create(request: RegistrationRequest): Promise<User> {
  return await Model.create<User>(request);
}

export async function list(): Promise<User[]> {
  return await Model.find<User>();
}

export async function searchById(id: string): Promise<User | null> {
  return await Model.findById<User>(id);
}

export async function searchByEmail(email: string): Promise<User | null> {

  return  Model.findOne<User>({
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


