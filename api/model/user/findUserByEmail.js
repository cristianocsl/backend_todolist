const { client } = require('../connection');

const findUserByEmail = async (email) => {
  const db = client.db('todoDatabase');

  const repetedEmail = await db.collection('users').findOne({ email });

  if (!repetedEmail) return null;

  return repetedEmail;
};

module.exports = findUserByEmail;