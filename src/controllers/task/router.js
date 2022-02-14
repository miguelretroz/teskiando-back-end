const express = require('express');

const router = express.Router({ mergeParams: true });

router.post('/register', require('./create'));

module.exports = router;
