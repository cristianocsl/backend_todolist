const { updateTask: update } = require('../../model/task');
const { findTaskById } = require('../../model/task');
const { ApiError: { SendToErrorMiddleware } } = require('../../error/apiError');
const { TASK_NOT_EXIST } = require('../../error/msgCodeError');

const updateTask = async (taskId, task) => {
  const foundTask = await findTaskById(taskId);
  if (!foundTask) return SendToErrorMiddleware(TASK_NOT_EXIST);
  await update(taskId, task);
};

module.exports = updateTask;