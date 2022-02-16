const express = require('express');

const routerUser = require('./user/router');
const routerLogin = require('./login/router');

const root = express.Router({ mergeParams: true });

root.use('/user', routerUser);
root.use('/login', routerLogin);

module.exports = root;
