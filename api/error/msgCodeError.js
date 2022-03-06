const {
  BAD_REQUEST,
  CONFLICT,
  UNAUTHORIZED, NOT_FOUND } = require('http-status-codes').StatusCodes;

  const INCORRECT_LOGIN = { code: BAD_REQUEST, message: 'Incorrect password' };
  
  const EMAIL_EXISTING = { code: CONFLICT, message: 'User already registered' };
  
  const TOKEN_NOT_FOUND = { code: UNAUTHORIZED, message: 'Token not found' };
  
  const INVALID_TOKEN = { code: UNAUTHORIZED, message: 'Expired or invalid token' };
  
  const USER_DOES_NOT_EXIST = {
    code: NOT_FOUND, message: 'User does not exist or email is incorrect',
  };
  
  const TASK_NOT_EXIST = { code: NOT_FOUND, message: 'Task does not exist' };
  
  const UNAUTHORIZED_USER = { code: UNAUTHORIZED, message: 'Unauthorized user' };

  const INVALID_ID_LENGTH = { code: BAD_REQUEST, message: 'Mongodb id must be 24 characters' };

module.exports = {
  INCORRECT_LOGIN,
  EMAIL_EXISTING,
  TOKEN_NOT_FOUND,
  INVALID_TOKEN,
  USER_DOES_NOT_EXIST,
  TASK_NOT_EXIST,
  UNAUTHORIZED_USER,
  INVALID_ID_LENGTH,
};
