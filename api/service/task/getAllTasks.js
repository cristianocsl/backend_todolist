const { getAllTasks: goToGetAllTasks } = require('../../model/task');

const getAllTasks = async () => goToGetAllTasks();

module.exports = getAllTasks;
