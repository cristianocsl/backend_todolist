const Joi = require('joi');

const SCHEMA = Joi.object({
  task: Joi.string().not().empty().required(),
  status: Joi.string().not().empty().required(),
});

const validateTask = async (body) => SCHEMA.validate(body);

module.exports = validateTask;