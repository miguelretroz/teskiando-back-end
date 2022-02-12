const {
  CONFLICT,
  NOT_FOUND,
  UNAUTHORIZED,
} = require('http-status-codes').StatusCodes;

const defaultMessages = require('./defaultMessages');

module.exports.alreadyRegistered = (key) => ({
  statusCode: CONFLICT,
  message: defaultMessages.ALREADY_REGISTERED(key[0].toUpperCase() + key.slice(1)),
});

module.exports.notFound = (entity) => ({
  statusCode: NOT_FOUND,
  message: defaultMessages.NOT_FOUND(entity),
});

module.exports.incorrect = (entity) => ({
  statusCode: UNAUTHORIZED,
  message: defaultMessages.INCORRECT(entity),
});
