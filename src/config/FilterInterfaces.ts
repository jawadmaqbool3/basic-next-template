import type { CreateUserRequest } from "@/types/Request";

export function filterUserKeys(user: Record<string, any>): CreateUserRequest {
  const validKeys = Object.keys(user).filter(
    (key): key is keyof CreateUserRequest => key in ({} as CreateUserRequest)
  );

  console.log("validKeys", validKeys);

  return validKeys.reduce((filtered, key) => {
    filtered[key] = user[key];
    return filtered;
  }, {} as CreateUserRequest);
}