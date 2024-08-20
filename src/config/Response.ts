import CustomException from "@/exceptions/CustomException";
import { NextResponse } from "next/server";

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

export const respondSuccess = (response: any) => {
  return respond(response, 200);
};
