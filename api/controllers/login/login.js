const { OK } = require('http-status-codes').StatusCodes;
const { validateLogin } = require('../../service/validations');
const { login: loginWith } = require('../../service/user');

const login = async (req, res, next) => {
  const reqBody = req.body;
  const { error } = await validateLogin(reqBody);
  if (error) return next(error);
  try {
    const token = await loginWith(reqBody);
    return res.status(OK).json({
      message: 'Login efetuado com sucesso!',
      ...token,
    });
  } catch (err) { next(err); }
};

module.exports = login;
