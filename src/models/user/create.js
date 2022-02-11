const connection = require('../connection');

module.exports = async ({ name, email, password }) => {
  const collection = await (await connection()).collection('users');

  const { insertedId } = await collection
    .insertOne({ name, email, password, createdAt: new Date(Date.now()).toISOString() });

  return { id: insertedId, name, email };
};
