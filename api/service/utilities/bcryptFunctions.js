const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const encryptor = async (password) => bcrypt.hashSync(password, SALT_ROUNDS);

const comparator = async (inputPassword, dbPassword) => bcrypt.compare(inputPassword, dbPassword);

module.exports = { encryptor, comparator };
