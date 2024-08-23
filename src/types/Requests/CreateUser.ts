import { z } from "zod";

const CreateUserRequest = {
  email: z
    .string()
    .email()
    .refine((value) => value !== "", {
      message: "Email is required.",
    }),

  first_name: z
    .string()
    .min(3, {
      message: "First name must be at least 3 characters long.",
    })
    .refine((value) => value !== "", {
      message: "First name is required.",
    }),

  last_name: z.string().min(3, {
    message: "Last name must be at least 3 characters long.",
  }),

  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long.",
    })
    .refine((value) => value !== "", {
      message: "Password is required.",
    }),

  confirm_password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long.",
    })
    .refine((data: any) => data.password === data.confirm_password, {
      path: ["confirm_password"],
      message: "Passwords do not match.",
    }),
};

const CreateCredentialsValidator = z.object(CreateUserRequest);

const CreateUserRequestKeys = Object.keys(CreateUserRequest);

export function filterRequestKeys(
  before: TCreateUserRequest
): TCreateUserRequest {
  const after: TCreateUserRequest = Object.fromEntries(
    Object.entries(before).filter(([key]) =>
      CreateUserRequestKeys.includes(key as keyof TCreateUserRequest)
    )
  ) as TCreateUserRequest;

  return after;
}

export type TCreateUserRequest = z.infer<typeof CreateCredentialsValidator>;
