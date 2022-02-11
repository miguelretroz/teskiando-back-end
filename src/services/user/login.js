const bcrypt = require('bcrypt');

const { userModels } = require('../../models');
const { apiError, creators } = require('../../errors');

module.exports = async ({ email, password }) => {
  const user = await userModels.getByEmail(email);

  if (!user) return apiError(creators.notFound('Usuário'));

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) return apiError(creators.incorrect('Senha'));

  return 'token';
};