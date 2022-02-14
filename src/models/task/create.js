const connection = require('../connection');

module.exports = async ({ userId, title, status }) => {
  const collection = await (await connection()).collection('tasks');

  await collection.insertOne({
    userId,
    title,
    status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
};
