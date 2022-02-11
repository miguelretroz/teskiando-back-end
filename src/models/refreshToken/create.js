const dayjs = require('dayjs');

const connection = require('../connection');

const { REFRESH_TOKEN_EXPIRY } = process.env;

module.exports = async (userId) => {
  const collection = await (await connection()).collection('refreshToken');

  const expiresIn = dayjs().add(REFRESH_TOKEN_EXPIRY, 'day').toISOString();

  const { insertedId } = await collection.insertOne({
      userId,
      expiresIn,
    });

  return { id: insertedId, expiresIn };
};
