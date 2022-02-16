const { ObjectId } = require('mongodb');
const { client } = require('../connection');
const { isValid } = require('../util/validateObjectId');

const getAllTasks = async (userId) => {
  await isValid(userId);
  const db = client.db('todoDatabase');
  return db.collection('tasks').find({ _id: ObjectId(userId) }).toArray();
};

module.exports = getAllTasks;