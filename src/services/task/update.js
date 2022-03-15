const { taskModels } = require('../../models');

const { userExists, taskExists } = require('./utils');

module.exports = async (userId, taskId, { title, status }) => {
  await userExists(userId);

  const task = await taskExists(userId, taskId);

  if (title) task.title = title;
  if (status) task.status = status;

  return taskModels.update(taskId, task);
};
