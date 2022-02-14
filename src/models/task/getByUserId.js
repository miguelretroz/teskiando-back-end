const connection = require('../connection');

module.exports = async (userId) => {
  const collection = await (await connection()).collection('tasks');

  return collection.find({ userId }).toArray();
};
