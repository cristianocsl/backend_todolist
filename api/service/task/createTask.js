const { createTask: create } = require('../../model/task');

const createTask = async (taskContent) => {
  const createdAt = new Date().toISOString();
  const status = taskContent.status || 'To do';
  await create({ ...taskContent, createdAt, status });
};

module.exports = createTask;