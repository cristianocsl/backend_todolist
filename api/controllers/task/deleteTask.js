const { OK } = require('http-status-codes').StatusCodes;
const { deleteTask: remove } = require('../../service/task');

const updateTask = async (req, res, next) => {
  const { params: { taskId } } = req;
  try {
    await remove(taskId);
    return res.status(OK).end();
  } catch (err) { next(err); }
};

module.exports = updateTask;