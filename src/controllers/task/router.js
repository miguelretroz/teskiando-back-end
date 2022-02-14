const express = require('express');

const { taskMiddlewares, userMiddlewares } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(userMiddlewares.auth);

router.post(
  '/register',
  taskMiddlewares.create,
  require('./create'),
);

router.get('/list', require('./getByUserId'));
router.put(
  '/edit/:id',
  taskMiddlewares.update,
  require('./update'),
);

module.exports = router;
