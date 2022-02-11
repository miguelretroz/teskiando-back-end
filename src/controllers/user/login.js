const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;

const { userServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { email, password } = req.body;

    const token = await userServices.login({ email, password });

    res.status(OK).json({ token });
  },
);
