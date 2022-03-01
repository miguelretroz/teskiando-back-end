const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/ping', require('./ping'));

module.exports = router;
