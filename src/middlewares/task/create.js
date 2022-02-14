const rescue = require('express-rescue');

const { taskValidations } = require('../../validations');

module.exports = rescue(
  (req, _res, next) => {
    const { title } = req.body;

    const { error } = taskValidations.create.validate({ title });

    if (error) return next(error);

    next();
  },
);
