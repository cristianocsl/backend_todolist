const { NO_CONTENT } = require('http-status-codes').StatusCodes;
const { deleteTask: remove } = require('../../service/task');

const deleteTask = async (req, res, next) => {
  const { params: { taskId } } = req;
  try {
    await remove(taskId);
    return res.status(NO_CONTENT).json();
  } catch (err) { next(err); }
};

module.exports = deleteTask;