const md5 = require('md5');
const { findUserByEmail } = require('../../model/user');
const { ApiError: { SendToErrorMiddleware } } = require('../../error/apiError');
const { INCORRECT_LOGIN, USER_DOES_NOT_EXIST } = require('../../error/msgCodeError');
const { tokenGenerator } = require('../utilities/tokenGenerator');

const login = async ({ email, password: inputPassword }) => {
  const user = await findUserByEmail(email);

  if (!user) return SendToErrorMiddleware(USER_DOES_NOT_EXIST);

  if (md5(inputPassword) !== user.password) return SendToErrorMiddleware(INCORRECT_LOGIN);

  const { _id, name } = user;

  const token = tokenGenerator({ _id, name, email });

  return { name: `${name.split(' ')[0]}`, token };
};

module.exports = login;
