const connection = require('../connection');
const serializer = require('./serializer');

module.exports = async (userId) => {
  const collection = await (await connection()).collection('tasks');

  const tasks = await collection.find({ userId }).toArray();
  return tasks.map((task) => serializer(task));
};
