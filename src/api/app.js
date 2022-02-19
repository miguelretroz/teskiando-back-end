const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const { COOKIE_SECRET, ORIGINS_LIST } = process.env;

app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));

const origin = ORIGINS_LIST ? ORIGINS_LIST.split('\n') : [];

const corsConfig = {
  origin,
  credentials: true,
};

app.use(cors(corsConfig));

app.use(require('../controllers/root'));

module.exports = app;
