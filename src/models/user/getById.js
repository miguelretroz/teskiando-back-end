const { ObjectId } = require('mongodb');

const connection = require('../connection');

module.exports = async (userId) => {
  const collection = await (await connection()).collection('users'); 

  return collection.findOne(new ObjectId(userId));
};
