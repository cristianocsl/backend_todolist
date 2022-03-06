const express = require('express');

const routerUser = require('./user/router');
const routerLogin = require('./login/router');
const routerTask = require('./task/router');

const root = express.Router({ mergeParams: true });

root.use('/register', routerUser);
root.use('/login', routerLogin);
root.use('/task', routerTask);

module.exports = root;
