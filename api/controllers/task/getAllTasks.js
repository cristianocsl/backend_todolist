const { OK } = require('http-status-codes').StatusCodes;
const { getAllTasks: goToGetAllTasks } = require('../../service/task');

const getAllTasks = async (_req, res, _next) => {
  const recipes = await goToGetAllTasks();
  return res.status(OK).json(recipes);
};

module.exports = getAllTasks;