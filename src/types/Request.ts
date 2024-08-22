
export type CreateUserRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

