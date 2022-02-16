const { format, parseISO } = require('date-fns');

const REQUIRED_FORMAT = 'dd/MM/yyyy HH:mm:ss';
const outputDate = async (tasks) => tasks.map((taskObject) => ({
  ...taskObject,
  createdAt: format(parseISO(taskObject.createdAt), REQUIRED_FORMAT),
}));

module.exports = { outputDate };