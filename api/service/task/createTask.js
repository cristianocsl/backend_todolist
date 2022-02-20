const { createTask: create } = require('../../model/task');

const createTask = async (task) => {
  const createdAt = new Date().toISOString();
  const status = task.status || 'To do';
  const { _id } = await create({ ...task, createdAt, status });
  return { _id, task, createdAt, status };
};

module.exports = createTask;