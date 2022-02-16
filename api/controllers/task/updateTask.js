const { OK } = require('http-status-codes').StatusCodes;
const { updateTask: update } = require('../../service/task');
const { validateTask } = require('../../service/validations');

const updateTask = async (req, res, next) => {
  const { body, params: { taskId } } = req;

  const { error } = await validateTask(body);

  if (error) return next(error);

  try {
    await update(taskId, body);
    
    return res.status(OK).json({ message: 'Task updated successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = updateTask;