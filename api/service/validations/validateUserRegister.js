const Joi = require('joi');

const STRONG_PASSWORD = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/;

const ERR_NAME = {
  'any.required': 'Este campo é obrigatório.',
  'string.base': 'Preencha apenas com letras.',
  'string.empty': 'Este campo não pode ser vazio.',
  'string.min': 'Utilize no mínimo de 3 caracteres.',
};

const ERR_REGISTER = {
  'any.required': 'Este campo é obrigatório.',
  'string.base': 'Preencha apenas com letras.',
  'string.empty': 'Este campo não pode ser vazio.',
  'string.min': 'Utilize no mínimo de 6 caracteres.',
  'string.email': 'Preencha este campo com um email válido.',
  'string.pattern': 'Preencha com pelo menos: 1 letra maiúscula, 1 número e 1 caractere especial.',
};

const SCHEMA = Joi.object({
  name: Joi.string().min(3).messages(ERR_NAME).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages(ERR_REGISTER),
  password: Joi.string().pattern(STRONG_PASSWORD).messages(ERR_REGISTER).required(),
});

const validateUserRegister = async (body) => SCHEMA.validate(body);

module.exports = validateUserRegister;