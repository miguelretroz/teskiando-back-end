const bcrypt = require('bcrypt');

const { userModels } = require('../../models');

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10);

module.exports = async ({ name, email, password }) => {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  await userModels.create({ name, email, password: passwordHash });
};
