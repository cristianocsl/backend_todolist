const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('http-status-codes').StatusCodes;
const { ApiError } = require('../error/apiError');

const errorHandler = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(BAD_REQUEST).json({ message: err.details[0].message });
  }

  if (err instanceof ApiError) {
    return res.status(err.code).json({ message: err.message });
  }

  return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
