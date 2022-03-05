const {
  BAD_REQUEST,
  CONFLICT,
  UNAUTHORIZED, NOT_FOUND } = require('http-status-codes').StatusCodes;

const INCORRECT_LOGIN = { code: BAD_REQUEST, message: 'Email ou senha incorretos!' };

const EMAIL_EXISTING = { code: CONFLICT, message: 'Usuário já está registrado!' };

const TOKEN_NOT_FOUND = { code: UNAUTHORIZED, message: 'Token não encontrado!' };

const INVALID_TOKEN = { code: UNAUTHORIZED, message: 'Token expirado ou inválido!' };

const USER_DOES_NOT_EXIST = { code: NOT_FOUND, message: 'Usuário não encontrado!' };

const TASK_NOT_EXIST = { code: NOT_FOUND, message: 'Tarefa não existente!' };

const UNAUTHORIZED_USER = { code: UNAUTHORIZED, message: 'Usuário não autorizado!' };

module.exports = {
  INCORRECT_LOGIN,
  EMAIL_EXISTING,
  TOKEN_NOT_FOUND,
  INVALID_TOKEN,
  USER_DOES_NOT_EXIST,
  TASK_NOT_EXIST,
  UNAUTHORIZED_USER,
};
