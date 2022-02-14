const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;

const { taskServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { id } = req.params;
    const { id: userId } = req.user;
    const { title, status } = req.body;

    await taskServices.update(userId, id, { title, status });

    res.status(OK).end();
  },
);
