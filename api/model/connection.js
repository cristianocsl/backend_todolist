// const { MongoClient } = require('mongodb');

// require('dotenv').config();

// // const { HOSTNAME } = process.env;
// // const MONGO_DB_URL_LOCAL = `mongodb://${HOSTNAME}:27017`;
// const { MONGO_DB_URL } = process.env;

// const OPTIONS = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// // const client = new MongoClient(MONGO_DB_URL_LOCAL, OPTIONS);
// const client = new MongoClient(MONGO_DB_URL, OPTIONS);

const { mongoClientOption } = require('./mongoClientMode');

const client = mongoClientOption.heroku;

const bootStrap = async () => {
  try {
    client.connect();
  } catch (err) {
    console.log('Connection failed');
  }
};

bootStrap();

module.exports = { client };
