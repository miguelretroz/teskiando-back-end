const {
  CONFLICT,
} = require('http-status-codes').StatusCodes;

const defaultMessages = require('./defaultMessages');

module.exports.alreadyRegistered = (key) => ({
  statusCode: CONFLICT,
  message: defaultMessages.ALREADY_REGISTERED(key[0].toUpperCase() + key.slice(1)),
});
