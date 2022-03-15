const { comparator } = require('../utilities/bcryptFunctions');
const { findUserByEmail } = require('../../model/user');
const { ApiError: { SendToErrorMiddleware } } = require('../../error/apiError');
const { INCORRECT_LOGIN, USER_DOES_NOT_EXIST } = require('../../error/msgCodeError');
const { tokenGenerator } = require('../utilities/tokenGenerator');

const login = async ({ email, password: inputPassword }) => {
  const user = await findUserByEmail(email);

  if (!user) return SendToErrorMiddleware(USER_DOES_NOT_EXIST);

  const matchPassword = await comparator(inputPassword, user.password);

  if (!matchPassword) return SendToErrorMiddleware(INCORRECT_LOGIN);

  const { _id, name } = user;

  const token = tokenGenerator({ _id, name, email });

  return { name: `${name.split(' ')[0]}`, token };
};

module.exports = login;
