const { ObjectId } = require('mongodb');

const connection = require('../connection');
const serializer = require('./serializer');

module.exports = async (taskId) => {
  const collection = await (await connection()).collection('tasks');

  return serializer(await collection.findOne(new ObjectId(taskId)));
};
