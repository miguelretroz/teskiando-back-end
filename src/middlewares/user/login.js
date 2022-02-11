const rescue = require('express-rescue');

const { userValidations } = require('../../validations');

module.exports = rescue(
  (req, _res, next) => {
    const { email, password } = req.body;

    const { error } = userValidations.login.validate({ email, password });

    if (error) return next(error);

    next();
  },
);