// models/User.ts
import mongoose, { Document, ObjectId } from "mongoose";
import type User from "@/interfaces/User";
import type RegistrationRequest from "@/interfaces/RegistrationRequest";
import UserSchema from "@/schemas/User";

const model: string = "users";

const Model = mongoose.model(model, UserSchema);

export interface UserDocument extends Omit<User, "_id">, Document<ObjectId> {}

export async function create(
  request: RegistrationRequest
): Promise<UserDocument> {
  return await Model.create<UserDocument>(request);
}

export async function list() {
  return await Model.find();
}

export async function search(id: string) {
  return await Model.findById(id);
}

export async function update(id: string, user: Partial<User>) {
  return await Model.findByIdAndUpdate(id, user);
}

export async function remove(id: string) {
  return await Model.findByIdAndDelete(id);
}

export async function login(email: string, password: string) {
  return await Model.findOne({ email, password });
}
