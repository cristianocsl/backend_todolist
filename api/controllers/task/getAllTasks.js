const { OK } = require('http-status-codes').StatusCodes;
const { getAllTasks: goToGetAllTasks } = require('../../service/task');

const getAllTasks = async (req, res, _next) => {
  const authenticationData = req.user;
  const recipes = await goToGetAllTasks(authenticationData);
  return res.status(OK).json(recipes);
};

module.exports = getAllTasks;