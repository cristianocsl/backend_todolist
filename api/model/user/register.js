const { client } = require('../connection');

const register = async (userInfos) => {
  const db = client.db('todoDatabase');
  await db.collection('users').insertOne(userInfos);
};

module.exports = register;