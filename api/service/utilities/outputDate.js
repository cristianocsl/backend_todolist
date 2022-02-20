const { format, parseISO } = require('date-fns');

const REQUIRED_FORMAT = 'dd/MM/yyyy HH:mm:ss';

const convertOneDate = (date) => format(parseISO(date), REQUIRED_FORMAT);

const outputDate = async (tasks) => tasks.map((taskObject) => ({
  ...taskObject,
  createdAt: convertOneDate(taskObject.createdAt),
}));

module.exports = { outputDate, convertOneDate };