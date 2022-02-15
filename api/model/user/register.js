const { client } = require('../connection');

const register = async (userInfos) => {
  const db = client.db('todoDatabase');
  const { insertedId } = await db.collection('users').insertOne(userInfos);
  return { _id: insertedId };
};

module.exports = register;