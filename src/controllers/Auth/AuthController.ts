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

import { TLoginRequest } from "@/types/Requests/Login";

import { create, searchByEmail } from "@/models/User";


export async function login(request: Request) {
  try {
    const credentials: TLoginRequest = await request.json();

    const user = await searchByEmail(credentials.email);

    if (!user || (await comparePassword(credentials.password, user.password))) {
      throw new LoginException();
    }

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

