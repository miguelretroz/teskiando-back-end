const { ObjectId } = require('mongodb');

const connection = require('../connection');

module.exports = async (taskId, { title, status }) => {
  const collection = await (await connection()).collection('tasks');

  await collection.updateOne(
    { _id: new ObjectId(taskId) },
    { $set: { title, status, updatedAt: new Date().toISOString() } },
  );
};
