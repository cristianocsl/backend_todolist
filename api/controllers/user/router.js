const express = require('express');
const { register } = require('./register');

const routerUser = express.Router({ mergeParams: true });

routerUser.post('/', register);

module.exports = routerUser;
