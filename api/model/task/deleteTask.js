const { client } = require('../connection');
const { isValid } = require('../util/validateObjectId');

const updateTask = async (_id) => {
  await isValid(_id);
  const db = client.db('todoDatabase');
  await db.collection('tasks').deleteOne(_id);
};

module.exports = updateTask;