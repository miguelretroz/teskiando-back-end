const { ObjectId } = require('mongodb');

const connection = require('../connection');

module.exports = async (taskId) => {
  const collection = await (await connection()).collection('tasks');

  return collection.findOne(new ObjectId(taskId));
};
