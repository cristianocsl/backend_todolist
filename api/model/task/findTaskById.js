const { ObjectId } = require('mongodb');
const { client } = require('../connection');
const { isValid } = require('../util/validateObjectId');

const findTaskById = async (id) => {
  await isValid(id);
  const db = await client.db('todoDatabase');
  const task = await db.collection('tasks').findOne(ObjectId(id));
  return task || null;
};

module.exports = findTaskById;