const { updateTask: update } = require('../../model/task');
const { findTaskById } = require('../../model/task');
const { ApiError: { SendToErrorMiddleware } } = require('../../error/apiError');
const { TASK_NOT_EXIST, INVALID_ID_LENGTH } = require('../../error/msgCodeError');

const updateTask = async (taskId, task) => {
  if (taskId.length !== 24) return SendToErrorMiddleware(INVALID_ID_LENGTH);
  const foundTask = await findTaskById(taskId);
  if (!foundTask) return SendToErrorMiddleware(TASK_NOT_EXIST);
  await update(taskId, task);
};

module.exports = updateTask;