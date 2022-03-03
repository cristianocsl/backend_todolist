const Joi = require('joi');

const ERR_LOGIN = {
  'string.base': 'Preencha apenas com letras.',
  'string.empty': 'Este campo não pode ser vazio.',
  'string.min': 'Utilize no mínimo de 3 caracteres.',
  'any.required': 'Este campo é obrigatório.',
};

const SCHEMA = {
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .messages(ERR_LOGIN),
  password: Joi.string().min(6).required().messages(ERR_LOGIN),
};

const validateLogin = async (body) => Joi.object(SCHEMA).validate(body);

module.exports = validateLogin;