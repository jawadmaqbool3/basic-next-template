import CustomException from "@/exceptions/CustomException";

export default class InvalidInputException extends CustomException {
  constructor(message: string) {
    super(message, 406);
  }
}
