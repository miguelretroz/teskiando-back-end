const { taskModels } = require('../../../models');

const { apiError, creators } = require('../../../errors');

module.exports = async (userId, taskId) => {
  const task = await taskModels.getById(taskId);

  if (!task) return apiError(creators.notFound('Tarefa'));

  if (task.userId !== userId) return apiError(creators.unauthorized('Usuário'));

  return task;
};
