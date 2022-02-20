const { createTask: create } = require('../../model/task');
const { outputDate } = require('../utilities/outputDate');

const createTask = async (taskAndUserId) => {
  const createdAt = new Date().toISOString();
  const status = taskAndUserId.status || 'To do';
  const { _id } = await create({ ...taskAndUserId, createdAt, status });
  return outputDate({ _id, ...taskAndUserId, createdAt, status });
};

module.exports = createTask;