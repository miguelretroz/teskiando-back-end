const { taskModels } = require('../../models');

module.exports = async ({ userId, title, status = 'A fazer' }) => {
  await taskModels.create({ userId, title, status });
};
