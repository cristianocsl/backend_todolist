const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const localhostConnection = () => {
  const { HOSTNAME } = process.env;
  const MONGO_DB_URL_LOCAL = `mongodb://${HOSTNAME}:27017`;
  const client = new MongoClient(MONGO_DB_URL_LOCAL, OPTIONS);
  return client;
};

const herokuConnection = () => {
  const { MONGO_DB_URL } = process.env;
  const client = new MongoClient(MONGO_DB_URL, OPTIONS);
  return client;
};

const mongoClientOption = {
  localhost: localhostConnection(),
  heroku: herokuConnection(),
};
// const { HOSTNAME } = process.env;
// const MONGO_DB_URL_LOCAL = `mongodb://${HOSTNAME}:27017`;
// const { MONGO_DB_URL } = process.env;

// const client = new MongoClient(MONGO_DB_URL_LOCAL, OPTIONS);
// const client = new MongoClient(MONGO_DB_URL, OPTIONS);

module.exports = { mongoClientOption };
