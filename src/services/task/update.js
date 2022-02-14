const { userModels, taskModels } = require('../../models');

const { apiError, creators } = require('../../errors');

const userExists = async (userId) => {
  const user = await userModels.getById(userId);

  if (!user) return apiError(creators.notFound('Usuário'));
};

const taskExists = async (userId, taskId) => {
  const task = await taskModels.getById(taskId);

  if (!task) return apiError(creators.notFound('Tarefa'));

  if (task.userId !== userId) return apiError(creators.unauthorized('Usuário'));

  return task;
};

module.exports = async (userId, taskId, { title, status }) => {
  await userExists(userId);
  const task = await taskExists(userId, taskId);

  const newData = { title: task.title, status: task.status };

  if (title !== undefined || title !== '') newData.title = title;
  if (status !== undefined || status !== '') newData.status = status;

  await taskModels.update(taskId, newData);
};
