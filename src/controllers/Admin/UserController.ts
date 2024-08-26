import {
  respondSuccess,
  respondServerError,
  respondCustomError,
} from "@/config/Response";

import type { TUserRquest } from "@/types/Requests/UserRequest";

import { create as createUser, list, searchById } from "@/models/User";

import User from "@/interfaces/Models/User";

import { NextRequest } from "next/server";

import { UserAlreadyExists, UserNotFound } from "@/exceptions/Admin/Users";

export async function create(request: Request) {
  try {
    let requestBody: TUserRquest = await request.json();

    let user: User = await createUser(requestBody);

    return respondSuccess({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    if (error instanceof Error && error.name == "MongoServerError") {
      return respondCustomError(new UserAlreadyExists(), 409);
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
    let requestBody: TUserRquest = await request.json();

    console.log("requestBody", requestBody);

    // let user: User = await createUser(requestBody);

    return respondSuccess({
      message: "User created successfully",
      // user: user,
    });
  } catch (error) {
    if (error instanceof Error && error.name == "MongoServerError") {
      return respondCustomError(new UserAlreadyExists(), 409);
    } else {
      return respondServerError(error);
    }
  }
}
