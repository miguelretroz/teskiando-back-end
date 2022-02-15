const { taskModels } = require('../../models');

const { userExists, taskExists } = require('./utils');

module.exports = async (userId, taskId, { title, status }) => {
  await userExists(userId);

  const task = await taskExists(userId, taskId);

  const newData = { title: task.title, status: task.status };

  if (title !== undefined && title !== '') newData.title = title;
  if (status !== undefined && status !== '') newData.status = status;

  await taskModels.update(taskId, newData);
};
