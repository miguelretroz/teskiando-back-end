const rescue = require('express-rescue');

const { userValidations } = require('../../validations');

module.exports = rescue(
  (req, _res, next) => {
    const { name, email, password } = req.body;

    const { error } = userValidations.create.validate({ name, email, password });

    if (error) return next(error);

    next();
  },
);