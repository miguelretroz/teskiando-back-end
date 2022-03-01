const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;

module.exports = rescue(
  (_req, res) => res.status(OK).json({ message: 'Pong' }),
);
