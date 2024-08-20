import CustomException from "@/exceptions/CustomException";

export default class LoginException extends CustomException {
  constructor() {
    super("Invalid Credentials provided", 401);
  }
}
