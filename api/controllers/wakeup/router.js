const express = require('express');
const { wakeup } = require('./index');

const routerWakeup = express.Router({ mergeParams: true });

routerWakeup.get('/', wakeup);

module.exports = routerWakeup;
