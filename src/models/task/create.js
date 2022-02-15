const connection = require('../connection');

module.exports = async ({ userId, title, status }) => {
  const collection = await (await connection()).collection('tasks');

  const createdAt = new Date().toISOString();

  const { insertedId } = await collection.insertOne({
    userId,
    title,
    status,
    createdAt,
    updatedAt: createdAt,
  });

  return { _id: insertedId, userId, title, status, createdAt, updatedAt: createdAt };
};
