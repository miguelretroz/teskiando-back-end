const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/user', require('./user/router'));
root.use('/task', require('./task/router'));
root.use('/', require('./generic/router'));

module.exports = root;
