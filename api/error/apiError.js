class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static SendToErrorMiddleware(obj) {
    const { code, message } = obj;
    throw new ApiError(code, message);
  }
}

module.exports = { ApiError };