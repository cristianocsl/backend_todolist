const { client } = require('../connection');

const createTask = async (contentTask) => {
  const db = client.db('todoDatabase');
  await db.collection('tasks').insertOne(contentTask);
};

module.exports = createTask;