import { hashPassword } from "@/config/Utilities";

import {
  respondSuccess,
  respondCustomException,
  respondServerError,
  respondCustomError,
} from "@/config/Response";

import CustomException from "@/exceptions/CustomException";

import type { CreateUserRequest } from "@/types/Request";

import { create as createUser, list } from "@/models/User";

import User from "@/interfaces/Models/User";

import InvalidInputException from "@/exceptions/Form/InvalidInputException";

export async function create(request: Request) {
  try {
    let requestBody: CreateUserRequest = await request.json();

    requestBody = await validateCreateUserRequest(requestBody);

    let user: User = await createUser(requestBody);

    return respondSuccess({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    if (error instanceof CustomException) {
      return respondCustomException(error);
    } else if (error instanceof Error && error.name == "MongoServerError") {
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

async function validateCreateUserRequest(
  request: CreateUserRequest
): Promise<CreateUserRequest> {
  if (request.first_name.length < 3) {
    throw new InvalidInputException(
      "first name should be more than 2 characters"
    );
  }

  if (request.last_name && request.last_name.length < 3) {
    throw new InvalidInputException(
      "Last name should be more than 2 characters"
    );
  }

  if (request.password != request.confirm_password) {
    throw new InvalidInputException("Passwords do not match");
  }

  request.password = await hashPassword(request.password);

  return request;
}
