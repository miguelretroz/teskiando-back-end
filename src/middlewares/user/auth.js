const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const { JWT_SECRET_KEY } = process.env;

const removeBearer = (token) => {
  if (token.startsWith('Bearer ')) {
    const [, tokenWithoutBearer] = token.split(' ');
    return tokenWithoutBearer;
  }
  return token;
};

module.exports = rescue(
  (req, res, next) => {
    let { authorization } = req.headers;

    if (!authorization) {
      return res.status(UNAUTHORIZED).json({ message: 'Token é obrigatório' });
    }

    try {
      authorization = removeBearer(authorization);

      const { sub, name, email } = jwt.verify(authorization, JWT_SECRET_KEY);
      req.user = { id: sub, name, email };
    } catch (err) {
      let { message } = err;

      if (message.includes('expired')) message = 'Token expirado';
      else message = 'Token incorreto';

      return res.status(UNAUTHORIZED).json({ message });
    }

    next();
  },
);
