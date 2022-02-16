const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const { COOKIE_SECRET } = process.env;

app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));

const corsConfig = {
  origins: [
    'http://localhost:3000',
    'https://teskiando.vercel.app',
    'https://teskiando-miguelretroz.vercel.app',
  ],
  credentials: true,
};

app.use(cors(corsConfig));

app.use(require('../controllers/root'));

module.exports = app;
