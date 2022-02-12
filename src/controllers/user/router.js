const express = require('express');

const { userMiddlewares } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.post(
  '/register',
  userMiddlewares.create,
  require('./create'),
);
router.post(
  '/login',
  userMiddlewares.login,
  require('./login'),
);

module.exports = router;
