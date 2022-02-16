const { outputDate } = require('../utilities/outputDate');
const { getAllTasks: goToGetAllTasks } = require('../../model/task');

const getAllTasks = async (userId) => {
  const tasks = await goToGetAllTasks(userId);
  return outputDate(tasks);
};
module.exports = getAllTasks;
