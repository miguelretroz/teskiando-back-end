const { taskModels } = require('../../models');

const { userExists, taskExists } = require('./utils');

module.exports = async (userId, taskId, { title, status, description }) => {
  await userExists(userId);

  const task = await taskExists(userId, taskId);

  if (title) task.title = title;
  if (status) task.status = status;
  if (description) task.description = description;

  return taskModels.update(taskId, task);
};
