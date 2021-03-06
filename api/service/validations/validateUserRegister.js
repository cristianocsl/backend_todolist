const Joi = require('joi');

const SCHEMA = Joi.object({
  name: Joi.string().min(3).not().empty()
    .required(),
  email: Joi.string().email().not().empty()
    .required(),
  password: Joi.string().min(6).not().empty()
    .required(),
});

const validateUserRegister = async (body) => SCHEMA.validate(body);

module.exports = validateUserRegister;