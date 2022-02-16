const Joi = require('joi');

const SCHEMA = {
  email: Joi.string().email().not().empty()
    .required(),
  password: Joi.string().length(6).not().empty()
    .required(),
};

const validateLogin = async (body) => Joi.object(SCHEMA).validate(body);

module.exports = validateLogin;