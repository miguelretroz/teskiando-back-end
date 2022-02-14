const Joi = require('joi');

const { defaultMessages } = require('../../errors');
const regex = require('./regex');

module.exports = Joi.object({
  title: Joi.string().required().messages({
    'string.base': defaultMessages.INCORRECT_TYPE('Título', 'string'),
    'string.empty': defaultMessages.REQUIRED('Título'),
    'any.required': defaultMessages.REQUIRED('Título'),
  }),
  status: Joi.string().pattern(regex.status),
});
