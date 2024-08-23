import { z } from "zod";

const LoginRequest = {
  email: z
    .string()
    .email()
    .refine((value) => value !== "", {
      message: "Email is required.",
    }),

  password: z.string().refine((value) => value !== "", {
    message: "Password is required.",
  }),
};

const LoginCredentialsValidator = z.object(LoginRequest);

export const LoginRequestKeys = Object.keys(LoginRequest);

export type TLoginRequest = z.infer<typeof LoginCredentialsValidator>;
