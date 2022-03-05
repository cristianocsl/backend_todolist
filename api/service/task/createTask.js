const { createTask: create } = require('../../model/task');
const { convertOneDate } = require('../utilities/outputDate');

const createTask = async (taskAndUserId) => {
  const createdAt = new Date().toISOString();
  const status = taskAndUserId.status || 'To do';
  const { _id } = await create({ ...taskAndUserId, createdAt, status });
  return { _id, ...taskAndUserId, createdAt: convertOneDate(createdAt), status };
};

module.exports = createTask;