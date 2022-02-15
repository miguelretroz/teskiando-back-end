const { taskModels } = require('../../models');

const { userExists } = require('./utils');

module.exports = async (userId) => {
  await userExists(userId);

  return taskModels.getByUserId(userId);
};