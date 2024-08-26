import CustomException from "@/exceptions/CustomException";

export  class UserNotFound extends CustomException {
  constructor() {
    super("User not found", 404);
  }
}

export  class UserAlreadyExists extends CustomException {
  constructor() {
    super("User already exists", 401);
  }
}
