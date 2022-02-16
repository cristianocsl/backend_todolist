const { OK } = require('http-status-codes').StatusCodes;
const { getAllTasks: goToGetAllTasks } = require('../../service/task');

const getAllTasks = async (req, res, next) => {
  const { _id } = req.user;

  try {
    const recipes = await goToGetAllTasks(_id);

    return res.status(OK).json(recipes);
  } catch (err) { next(err); }
};

module.exports = getAllTasks;