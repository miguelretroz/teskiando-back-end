const rescue = require('express-rescue');
const { NOT_IMPLEMENTED } = require('http-status-codes').StatusCodes;

module.exports = rescue(
  (req, res) => {
    res.status(NOT_IMPLEMENTED).end();
  },
);
