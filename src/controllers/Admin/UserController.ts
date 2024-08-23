
import {
  respondSuccess,
  respondServerError,
  respondCustomError,
} from "@/config/Response";

import type { TCreateUserRequest } from "@/types/Requests/CreateUser";

import { create as createUser, list } from "@/models/User";

import User from "@/interfaces/Models/User";


export async function create(request: Request) {
  try {
    let requestBody: TCreateUserRequest = await request.json();

    let user: User = await createUser(requestBody);

    return respondSuccess({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    if (error instanceof Error && error.name == "MongoServerError") {
      return respondCustomError("User already exists", 409);
    } else {
      return respondServerError(error);
    }
  }
}

export async function index(request: Request) {
  try {
    let users: User[] = await list();
    return respondSuccess({
      users: users,
    });
  } catch (error) {
    return respondServerError(error);
  }
}
