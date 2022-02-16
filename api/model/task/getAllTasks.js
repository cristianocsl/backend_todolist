const { client } = require('../connection');

const getAllTasks = async () => {
  const db = client.db('todoDatabase');
  return db.collection('tasks').find().toArray();
};

module.exports = getAllTasks;