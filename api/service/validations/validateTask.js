const Joi = require('joi');

const SCHEMA = Joi.object({
  task: Joi.string().not().empty().required(),
  status: Joi.allow(''),
});

const validateTask = async (body) => SCHEMA.validate(body);

module.exports = validateTask;