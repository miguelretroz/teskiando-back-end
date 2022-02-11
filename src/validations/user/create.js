const Joi = require('joi');

const { regex } = require('../../helpers');

module.exports = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().pattern(regex.email).required(),
  password: Joi.string().pattern(regex.password).required(),
});
