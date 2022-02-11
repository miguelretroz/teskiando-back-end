const express = require('express');

const app = express();

const { COOKIE_SECRET } = process.env;

app.use(express.json());
app.use(require('cookie-parser')(COOKIE_SECRET));

app.use(require('../controllers/root'));

module.exports = app;
