const { UNPROCESSABLE_ENTITY } = require('http-status-codes').StatusCodes;

module.exports = (err, _req, res, _next) => {
  console.error(err);

  if (err.isJoi) return res.status(UNPROCESSABLE_ENTITY).json({ message: err.message });

  res.status(500).json({ message: 'Internal Server Error' });
};
