const { userModels } = require('../../../models');

const { apiError, creators } = require('../../../errors');

module.exports = async (userId) => {
  const user = await userModels.getById(userId);

  if (!user) return apiError(creators.notFound('Usuário'));

  return user;
};
