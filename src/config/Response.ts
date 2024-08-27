import CustomException from "@/exceptions/CustomException";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const respond = (response: unknown, status = 200) => {
  return NextResponse.json(response, { status: status });
};
export const respondCustomException = (error: CustomException) => {
  return respond(
    {
      message: error.getMessage(),
    },
    error.getStatusCode()
  );
};

export const respondServerError = (error: unknown) => {
  return respond(
    {
      message: "Unexpected error occured.",
      console: error,
    },
    500
  );
};

export const respondCustomError = (message: unknown, status = 500) => {
  return respond(
    {
      message: message,
    },
    status
  );
};

export const respondZodError = (error: ZodError) => {
  if (error.errors[0]) return respond({ error: error.errors[0].message }, 403);
  else return respondServerError(error);
};

export const respondSuccess = (response: any) => {
  return respond(response, 200);
};
