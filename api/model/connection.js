const { mongoClientOption } = require('./mongoClientMode');

const client = mongoClientOption.localhost;

const bootStrap = async () => {
  try {
    client.connect();
  } catch (err) {
    console.log('Connection failed');
  }
};

bootStrap();

module.exports = { client };
