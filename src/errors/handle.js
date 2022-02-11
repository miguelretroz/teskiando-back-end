const { UNPROCESSABLE_ENTITY } = require('http-status-codes').StatusCodes;

module.exports = (err, _req, res, _next) => {
  console.error(err);

  if (err.isJoi) return res.status(UNPROCESSABLE_ENTITY).json({ message: err.message });

  if (err.statusCode) {
    const { statusCode, message } = err;
    return res.status(statusCode).json({ message });
  }

  res.status(500).json({ message: 'Internal Server Error' });
};
