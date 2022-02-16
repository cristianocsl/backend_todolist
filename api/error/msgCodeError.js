const {
  BAD_REQUEST,
  CONFLICT,
  UNAUTHORIZED, NOT_FOUND } = require('http-status-codes').StatusCodes;

const INCORRECT_LOGIN = { code: BAD_REQUEST, message: 'Invalid fields' };

const EMAIL_EXISTING = { code: CONFLICT, message: 'User already registered' };

const TOKEN_NOT_FOUND = { code: UNAUTHORIZED, message: 'Token not found' };

const INVALID_TOKEN = { code: UNAUTHORIZED, message: 'Expired or invalid token' };

const USER_DOES_NOT_EXIST = { code: NOT_FOUND, message: 'User does not exist' };

const CATEGORY_NOT_FOUND = { code: BAD_REQUEST, message: '"categoryIds" not found' };

const POST_DOES_NOT_EXIST = { code: NOT_FOUND, message: 'Post does not exist' };

const UNAUTHORIZED_USER = { code: UNAUTHORIZED, message: 'Unauthorized user' };

const CANNOT_BE_EDITADED = { code: BAD_REQUEST, message: 'Categories cannot be edited' };

const TITLE_REQUIRED = { code: BAD_REQUEST, message: '"title" is required' };

const CONTENT_REQUIRED = { code: BAD_REQUEST, message: '"content" is required' };

module.exports = {
  INCORRECT_LOGIN,
  EMAIL_EXISTING,
  TOKEN_NOT_FOUND,
  INVALID_TOKEN,
  USER_DOES_NOT_EXIST,
  CATEGORY_NOT_FOUND,
  POST_DOES_NOT_EXIST,
  UNAUTHORIZED_USER,
  CANNOT_BE_EDITADED,
  TITLE_REQUIRED,
  CONTENT_REQUIRED,
};
