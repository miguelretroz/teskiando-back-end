const { taskModels } = require('../../models');

const { userExists } = require('./utils');

module.exports = async ({ userId, title, status = 'A fazer' }) => {
  await userExists(userId);

  return taskModels.create({ userId, title, status });
};
