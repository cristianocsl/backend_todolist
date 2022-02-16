const express = require('express');

const routerUser = require('./user/router');

const root = express.Router({ mergeParams: true });

root.use('/user', routerUser);

module.exports = root;
