import CustomException from "@/exceptions/CustomException";

export default class MissingInputException extends CustomException {
  constructor(message: string) {
    super(message, 400);
  }
}
