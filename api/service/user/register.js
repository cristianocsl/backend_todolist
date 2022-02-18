const { register: create } = require('../../model/user');
const { ApiError: { SendToErrorMiddleware } } = require('../../error/apiError');
const { EMAIL_EXISTING } = require('../../error/msgCodeError');
const { findUserByEmail } = require('../../model/user');
const { tokenGenerator } = require('../utilities/tokenGenerator');

const register = async ({ name, email, password }) => {
  const repetedEmail = await findUserByEmail(email);

  if (repetedEmail) return SendToErrorMiddleware(EMAIL_EXISTING);

  const { _id } = await create({ name, email, password });

  const token = tokenGenerator({ _id, name, email });

  return { token };
};

module.exports = register;
