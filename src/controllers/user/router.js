const express = require('express');

const { userMiddlewares } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.post(
  '/register',
  userMiddlewares.create,
  require('./create'),
);

router.get('/oi', (req, res) => res.status(200).json({ message: 'oi' }));

module.exports = router;
