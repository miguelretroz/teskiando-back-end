const bcrypt = require('bcrypt');

const { userModels, refreshTokenModels } = require('../../models');
const { apiError, creators } = require('../../errors');

module.exports = async ({ email, password }) => {
  const user = await userModels.getByEmail(email);

  if (!user) return apiError(creators.notFound('Usuário'));

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) return apiError(creators.incorrect('Senha'));

  const { _id } = user;

  const refreshToken = await refreshTokenModels.create(_id);

  return { refreshToken, token: 'token' };
};