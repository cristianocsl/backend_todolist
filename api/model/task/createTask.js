const { client } = require('../connection');

const createTask = async (contentTask) => {
  const db = client.db('todoDatabase');
  const { insertedId } = await db.collection('tasks').insertOne(contentTask);
  return { _id: insertedId };
};

module.exports = createTask;