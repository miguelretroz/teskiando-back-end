const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;

const { taskServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { id: userId } = req.user;

    const tasks = await taskServices.getByUserId(userId);

    res.status(OK).json({ tasks });
  },
);
