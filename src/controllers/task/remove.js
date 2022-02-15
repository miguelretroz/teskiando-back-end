const rescue = require('express-rescue');
const { NO_CONTENT } = require('http-status-codes').StatusCodes;

const { taskServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { id: taskId } = req.params;
    const { id: userId } = req.user;

    await taskServices.remove(userId, taskId);

    res.status(NO_CONTENT).end();
  },
);
