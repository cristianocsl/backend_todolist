const { createTask: create } = require('../../model/task');

const createTask = async (taskContent) => {
  const createdAt = new Date().toISOString();
  await create({ ...taskContent, createdAt });
};

module.exports = createTask;