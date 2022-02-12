const Joi = require('joi');

const { regex } = require('../../helpers');
const { defaultMessages } = require('../../errors');

module.exports = Joi.object({
  email: Joi.string().pattern(regex.email).required().messages({
    'string.base': defaultMessages.INCORRECT_TYPE('Email', 'string'),
    'any.empty': defaultMessages.REQUIRED('Email'),
    'string.pattern.base': defaultMessages.INVALID_PATTERN('Email'),
    'any.required': defaultMessages.REQUIRED('Email'),
  }),
  password: Joi.string().pattern(regex.password).required().messages({
    'string.base': defaultMessages.INCORRECT_TYPE('Senha', 'string'),
    'string.empty': defaultMessages.REQUIRED('Senha'),
    'string.pattern.base': defaultMessages.INVALID_PATTERN('Senha'),
    'any.required': defaultMessages.REQUIRED('Senha'),
  }),
});
