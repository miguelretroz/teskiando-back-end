const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

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
app.use(express.static(path.resolve('src', 'public')));

app.use(require('../controllers/root'));

const swaggerOptions = {
  customJs: '/docs/custom.js',
};

app.get('/', (_req, res) => res.redirect('/api-docs'));
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(require('../docs/swagger.json'), swaggerOptions),
);

module.exports = app;
