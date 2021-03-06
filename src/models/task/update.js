const { ObjectId } = require('mongodb');

const connection = require('../connection');
const serializer = require('./serializer');

module.exports = async (taskId, { title, status, description }) => {
  const collection = await (await connection()).collection('tasks');

  const { value } = await collection.findOneAndUpdate(
    { _id: new ObjectId(taskId) },
    { $set: { title, status, description, updatedAt: new Date().toISOString() } },
    { returnDocument: 'after' },
  );

  return serializer(value);
};
