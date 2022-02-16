const { client } = require('../connection');
const { isValid } = require('../util/validateObjectId');

const getAllTasks = async (userId) => {
  await isValid(userId);
  const db = client.db('todoDatabase');
  const tasks = await db.collection('tasks').find({ userId }).toArray();
  return tasks;
};

module.exports = getAllTasks;