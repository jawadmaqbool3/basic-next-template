export default class CustomException extends Error {
  private statusCode;
  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getMessage() {
    return this.message;
  }
}
