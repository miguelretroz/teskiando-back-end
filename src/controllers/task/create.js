const rescue = require('express-rescue');
const { CREATED } = require('http-status-codes').StatusCodes;

const { taskServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { userId, title } = req.body;

    await taskServices.create({ userId, title });

    res.status(CREATED).end();
  },
);
