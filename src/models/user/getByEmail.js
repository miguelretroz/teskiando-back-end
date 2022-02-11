const connection = require('../connection');

module.exports = async (email) => {
  const collection = await (await connection()).collection('users');

  return collection.findOne({ email });
};
