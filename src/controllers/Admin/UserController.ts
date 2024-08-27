import {
  respondSuccess,
  respondServerError,
  respondCustomError,
  respondZodError,
} from "@/config/Response";

import type { TUserRequest } from "@/types/Requests/UserRequest";

import { CreateCredentialsValidator, UpdateCredentialsValidator } from "@/types/Requests/UserRequest";

import {
  create as createUser,
  list,
  searchById,
  update as updateUser,
} from "@/models/User";

import User, { UserRead } from "@/interfaces/Models/User";

import { NextRequest } from "next/server";

import { UserAlreadyExists, UserNotFound } from "@/exceptions/Admin/Users";

import { ZodError } from "zod";

export async function create(request: Request) {
  try {
    let requestBody: TUserRequest = await request.json();

    await CreateCredentialsValidator.parseAsync(requestBody);

    let user: User = await createUser(requestBody);

    return respondSuccess({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    if (error instanceof Error && error.name == "MongoServerError") {
      return respondCustomError(new UserAlreadyExists().getMessage(), 409);
    } else if (error instanceof ZodError) {
      return respondZodError(error);
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

export async function show(request: NextRequest) {
  try {
    const id: string | undefined = request.nextUrl.pathname.split("/").pop();

    if (!id) throw new UserNotFound();

    const user = await searchById(id);

    if (!user) throw new UserNotFound();

    return respondSuccess({
      user: user,
    });
  } catch (error) {
    return respondServerError(error);
  }
}

export async function update(request: NextRequest) {
  try {
    const id: string | undefined = request.nextUrl.pathname.split("/").pop();

    if (!id) throw new UserNotFound();

    let requestBody: TUserRequest = await request.json();

    await UpdateCredentialsValidator.parseAsync(requestBody);

    let user: UserRead | null = await updateUser(id, requestBody);

    return respondSuccess({
      message: "User updated successfully",
      user: user,
    });
  } catch (error) {
    if (error instanceof Error && error.name == "MongoServerError") {
      return respondCustomError(new UserAlreadyExists(), 409);
    } else if (error instanceof ZodError) {
      return respondZodError(error);
    } else {
      return respondServerError(error);
    }
  }
}
