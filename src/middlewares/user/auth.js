const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const { JWT_SECRET_KEY } = process.env;

module.exports = rescue(
  (req, res, next) => {
    const { authorization } = req.headers;

    try {
      const { sub, name, email } = jwt.verify(authorization, JWT_SECRET_KEY);
      req.user = { id: sub, name, email };
    } catch (err) {
      let { message } = err;

      if (message.includes('provided')) {
        message = 'Token é obrigatório';
      } else if (message.includes('expired')) message = 'Token expirado';
      else message = 'Token incorreto';

      return res.status(UNAUTHORIZED).json({ message });
    }

    next();
  },
);
