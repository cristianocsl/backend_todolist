const { getAllTasks: goToGetAllTasks } = require('../../model/task');

const getAllTasks = async (userId) => goToGetAllTasks(userId);

module.exports = getAllTasks;
