const rescue = require('express-rescue');

const { taskValidations } = require('../../validations');

module.exports = rescue(
  (req, _res, next) => {
    const { title, status } = req.body;

    const { error } = taskValidations.update.validate({ title, status });

    if (error) return next(error);

    next();
  },
);
