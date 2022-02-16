const { CREATED } = require('http-status-codes').StatusCodes;
const { createTask: create } = require('../../service/task');
const { validateTask } = require('../../service/validations');

const createTask = async (req, res, next) => {
  const { body, user: { _id } } = req;

  const { error } = await validateTask(body);

  if (error) return next(error);

  const recipe = await create({ ...body, userId: _id });

  return res.status(CREATED).json(recipe);
};

module.exports = createTask;