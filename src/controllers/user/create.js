const { NOT_IMPLEMENTED } = require('http-status-codes').StatusCodes;
const rescue = require('express-rescue');

module.exports = rescue(
    (req, res) => {
      res.status(NOT_IMPLEMENTED).end();
    },
  );
