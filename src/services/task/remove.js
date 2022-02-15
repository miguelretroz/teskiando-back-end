const { taskModels } = require('../../models');

const { userExists, taskExists } = require('./utils');

module.exports = async (userId, taskId) => {
  await userExists(userId);

  await taskExists(userId, taskId);

  await taskModels.remove(taskId);
};
