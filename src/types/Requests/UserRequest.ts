import { z } from "zod";

const messages = {
  email_required: "Email is required.",
  first_name_atleast_3: "First name must be at least 3 characters long.",
  last_name_atleast_3: "Last name must be at least 3 characters long.",
  first_name_required: "First name is required.",
  password_atleast_8: "Password must be at least 8 characters long.",
  password_required: "Password is required.",
  confirm_password_atleast_8: "Confirm must be at least 8 characters long.",
  confirm_password_required: "Confirm password is required.",
  confirm_password_not_match: "Confirm password not match.",
};

const UserRequest = {
  email: z
    .string()
    .email()
    .refine((value) => value !== "", {
      message: messages.email_required,
    }),

  first_name: z
    .string()
    .min(3, {
      message: messages.first_name_atleast_3,
    })
    .refine((value) => value !== "", {
      message: messages.first_name_required,
    }),

  last_name: z.string().min(3, {
    message: messages.last_name_atleast_3,
  }),
};

const createUserRequest = (userRequest: any) => {
  (userRequest.password = z
    .string()
    .min(8, {
      message: messages.password_atleast_8,
    })
    .refine((value) => value !== "", {
      message: messages.password_required,
    })),
    (userRequest.confirm_password = z
      .string()
      .min(8, { message: messages.confirm_password_atleast_8 }));
  return userRequest;
};
const updateUserRequest = (userRequest: any) => {
  userRequest.password = z.string().optional();

  userRequest.confirm_password = z.string().optional();

  return userRequest;
};
export const CreateCredentialsValidator = z
  .object(createUserRequest(UserRequest))
  .superRefine((data) => {
    if (data.password !== data.confirm_password) {
      throw new z.ZodError([
        {
          path: ["confirm_password"],
          message: messages.confirm_password_not_match,
          code: z.ZodIssueCode.custom,
        },
      ]);
    }
  });

export const UpdateCredentialsValidator = z
  .object(updateUserRequest(UserRequest))
  .superRefine((data) => {
    if (data.password && data.password.length < 8) {
      throw new z.ZodError([
        {
          path: ["password"],
          message: messages.password_atleast_8,
          code: z.ZodIssueCode.custom,
        },
      ]);
    }

    if (data.password && data.password !== data.confirm_password) {
      throw new z.ZodError([
        {
          path: ["confirm_password"],
          message: messages.confirm_password_atleast_8,
          code: z.ZodIssueCode.custom,
        },
      ]);
    }
  });

const CreateUserRequestKeys = Object.keys(UserRequest);

export function filterRequestKeys(before: TUserRequest): TUserRequest {
  const after: TUserRequest = Object.fromEntries(
    Object.entries(before).filter(
      ([key]) =>
        before[key] && CreateUserRequestKeys.includes(key as keyof TUserRequest)
    )
  ) as TUserRequest;

  return after;
}

export type TUserRequest = z.infer<typeof CreateCredentialsValidator>;
