const Joi = require('joi');

const { regex } = require('../../helpers');
const { defaultMessages } = require('../../errors');

const NAME_MIN_LENGTH = 3;

module.exports = Joi.object({
  name: Joi.string().min(NAME_MIN_LENGTH).required().messages({
    'string.base': defaultMessages.INCORRECT_TYPE('Nome', 'string'),
    'string.empty': defaultMessages.REQUIRED('Nome'),
    'string.min': defaultMessages.MIN_LENGTH('Nome', NAME_MIN_LENGTH),
  }),
  email: Joi.string().pattern(regex.email).required().messages({
    'string.base': defaultMessages.INCORRECT_TYPE('Email', 'string'),
    'string.empty': defaultMessages.REQUIRED('Email'),
    'string.pattern.base': defaultMessages.INVALID_PATTERN('Email'),
  }),
  password: Joi.string().pattern(regex.password).required().messages({
    'string.base': defaultMessages.INCORRECT_TYPE('Senha', 'string'),
    'string.empty': defaultMessages.REQUIRED('Senha'),
    'string.pattern.base': defaultMessages.INVALID_PATTERN('Senha'),
  }),
});
