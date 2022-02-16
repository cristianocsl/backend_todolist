const { deleteTask: remove } = require('../../model/task');
const { findTaskById } = require('../../model/task');
const { ApiError: { SendToErrorMiddleware } } = require('../../error/apiError');
const { TASK_NOT_EXIST } = require('../../error/msgCodeError');

const deleteTask = async (taskId, task) => {
  const foundTask = await findTaskById(taskId);
  if (!foundTask) return SendToErrorMiddleware(TASK_NOT_EXIST);
  await remove(taskId, task);
};

module.exports = deleteTask;