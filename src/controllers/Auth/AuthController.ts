import {
  hashPassword,
  comparePassword,
  generateToken,
} from "@/config/Utilities";

import {
  respondSuccess,
  respondCustomException,
  respondServerError,
} from "@/config/Response";

import CustomException from "@/exceptions/CustomException";
import LoginException from "@/exceptions/Auth/LoginException";
import LoginRequest from "@/interfaces/Requests/Login";
import RegistrationRequest from "@/interfaces/Requests/Registration";

import { create, searchByEmail } from "@/models/User";

import type User from "@/interfaces/Models/User";
import InvalidInputException from "@/exceptions/Form/InvalidInputException";

export async function login(request: Request) {
  try {
    const credentials: LoginRequest = await request.json();

    const user = await validateLoginAttempt(credentials);

    const token = generateToken({ userId: user._id });

    return respondSuccess({
      message: "User logged in successfully",
      token: token,
      user: user,
    });
  } catch (error) {
    if (error instanceof CustomException) {
      return respondCustomException(error);
    } else {
      return respondServerError(error);
    }
  }
}

export async function register(request: Request) {
  let requestBody: RegistrationRequest = await request.json();

  requestBody = await validateRegistrationRequest(requestBody);

  console.log(requestBody);
}

async function validateRegistrationRequest(
  request: RegistrationRequest
): Promise<RegistrationRequest> {
    
  if (request.first_name.length <= 3) {
    throw new InvalidInputException("first name should be more than 2 characters");
  }

  if (request.last_name && request.last_name.length <= 3) {
    throw new InvalidInputException("Last name should be more than 2 characters");
  }

  request.password = await hashPassword(request.password);

  return request;
}

async function validateLoginAttempt(request: LoginRequest): Promise<User> {
  const user = await searchByEmail(request.email);

  if (!user || (await comparePassword(request.password, user.password))) {
    throw new LoginException();
  }

  return user;
}
