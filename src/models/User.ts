// models/User.ts
import mongoose from "mongoose";
import User, { UserRead } from "@/interfaces/Models/User";
import type { TUserRequest } from "@/types/Requests/UserRequest";
import { filterRequestKeys } from "@/types/Requests/UserRequest";
import UserSchema from "@/schemas/User";
import { hashPassword } from "@/config/Utilities";

const model: string = "users";

const Model = mongoose.models[model] || mongoose.model(model, UserSchema);

const projectionView = {
  name: { $concat: ["$first_name", " ", "$last_name"] },
  _id: 1,
  first_name: 1,
  last_name: 1,
  email: 1,
  createdAt: 1,
};

export async function create(request: TUserRequest): Promise<UserRead> {
  const filterRequest = filterRequestKeys(request);

  filterRequest.password = await hashPassword(filterRequest.password);

  return Model.create(filterRequest);
}

export async function list(): Promise<UserRead[]> {
  return await Model.aggregate<UserRead>([
    {
      $project: projectionView,
    },
  ]);
}

export async function searchById(id: string): Promise<UserRead | null> {
  const user = (
    await Model.aggregate<UserRead>([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $project: projectionView,
      },
    ])
  )[0];

  return user ? user : null;
}

export async function searchByEmail(email: string): Promise<UserRead | null> {
  const user = (
    await Model.aggregate<UserRead>([
      {
        $match: {
          email: email,
        },
      },
      {
        $project: projectionView,
      },
    ])
  )[0];

  return user ? user : null;
}

export async function update(
  id: string,
  request: Partial<TUserRequest>
): Promise<UserRead | null> {
  const filterRequest = filterRequestKeys(request);

  if (filterRequest.password) {
    filterRequest.password = await hashPassword(filterRequest.password);
  }
  
  await Model.findByIdAndUpdate(id, filterRequest);

  return await searchById(id);
}

export async function remove(id: string): Promise<boolean | null> {
  return await Model.findByIdAndDelete(id);
}
