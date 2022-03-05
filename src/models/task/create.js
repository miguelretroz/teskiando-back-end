const connection = require('../connection');
const serializer = require('./serializer');

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

  return serializer({ _id: insertedId, userId, title, status, createdAt, updatedAt: createdAt });
};
