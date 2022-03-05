const { CREATED } = require('http-status-codes').StatusCodes;
const { register: create } = require('../../service/user');
const { validateUserRegister } = require('../../service/validations');

const register = async (req, res, next) => {
  const reqBody = req.body;
  const { error } = await validateUserRegister(reqBody);
  if (error) return next(error);
  try {
    const token = await create(reqBody);
    return res.status(CREATED).json({
      message: 'Cadastro realizado com sucesso!',
      token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { register };