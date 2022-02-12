const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { userModels, refreshTokenModels } = require('../../models');
const { apiError, creators } = require('../../errors');

const { JWT_SECRET_KEY } = process.env;

module.exports = async ({ email, password }) => {
  const user = await userModels.getByEmail(email);

  if (!user) return apiError(creators.notFound('Usuário'));

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) return apiError(creators.incorrect('Senha'));

  const { _id, name } = user;

  const refreshToken = await refreshTokenModels.create(_id);

  const token = jwt.sign({ sub: _id, name, email }, JWT_SECRET_KEY, { expiresIn: 15 * 60 });

  return { refreshToken, token };
};