const { taskModels, userModels } = require('../../models');

const { apiError, creators } = require('../../errors');

module.exports = async ({ userId, title, status = 'A fazer' }) => {
  const user = await userModels.getById(userId);

  if (!user) return apiError(creators.notFound('Usuário'));

  await taskModels.create({ userId, title, status });
};
