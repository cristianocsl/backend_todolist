const { OK } = require('http-status-codes').StatusCodes;

const wakeup = async (_req, res, next) => {
  try {
    return res.status(OK).json('Wakeup done!');
  } catch (err) { next(err); }
};

module.exports = { wakeup };
