const { ObjectId } = require('mongodb');

const isValid = async (id) => !ObjectId.isValid(id) && null;

module.exports = { isValid };
