import { hashPassword } from "@/config/Utilities";
import LoginRequest from "@/interfaces/LoginRequest";

import RegistrationRequest from "@/interfaces/RegistrationRequest";
import User  from "@/models/User";

import { NextResponse } from "next/server";

export async function login(request: Request) {
  const body: LoginRequest = await request.json();

  const { email, password } = body;

  console.log(email, password);

  return NextResponse.json({ message: "User created" });
}

export async function register(request: Request) {

  let requestBody: RegistrationRequest = await request.json();
  
  requestBody = await validateRegistrationRequest(requestBody);

  User.create(requestBody);
}

async function validateRegistrationRequest(
  request: RegistrationRequest
): Promise<RegistrationRequest> {
  if (request.first_name.length <= 3) {
    throw new Error("first name should be more than 2 characters");
  }

  if (request.last_name && request.last_name.length <= 3) {
    throw new Error("Last name should be more than 2 characters");
  }

  request.password = await hashPassword(request.password);

  return request;
}
