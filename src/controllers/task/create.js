const rescue = require('express-rescue');
const { CREATED } = require('http-status-codes').StatusCodes;

const { taskServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { title } = req.body;
    const { id: userId } = req.user;

    const task = await taskServices.create({ userId, title });

    res.status(CREATED).json({ task });
  },
);
