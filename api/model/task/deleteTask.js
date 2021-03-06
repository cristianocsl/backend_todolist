const { ObjectId } = require('mongodb');
const { client } = require('../connection');
const { isValid } = require('../util/validateObjectId');

const deleteTask = async (_id) => {
  await isValid(_id);
  const db = client.db('todoDatabase');
  await db.collection('tasks').deleteOne({ _id: ObjectId(_id) });
};

module.exports = deleteTask;