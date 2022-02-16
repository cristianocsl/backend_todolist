const { OK } = require('http-status-codes').StatusCodes;
const { getAllTasks: goToGetAllTasks } = require('../../service/task');

const getAllTasks = async (req, res, _next) => {
  const { _id } = req.user;
  const recipes = await goToGetAllTasks(_id);
  return res.status(OK).json(recipes);
};

module.exports = getAllTasks;