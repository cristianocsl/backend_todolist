const { ObjectId } = require('mongodb');
const { client } = require('../connection');
const { isValid } = require('../util/validateObjectId');

const updateTask = async (_id, task) => {
  await isValid(_id);
  const db = client.db('todoDatabase');
  await db.collection('tasks').updateOne(
    { _id: ObjectId(_id) },
    { $set: task },
    );
};

module.exports = updateTask;