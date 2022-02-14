const express = require('express');

const { taskMiddlewares } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.post(
  '/register',
  taskMiddlewares.create,
  require('./create'),
);

module.exports = router;
