const { CREATED } = require('http-status-codes').StatusCodes;
const rescue = require('express-rescue');

const { userServices } = require('../../services');

module.exports = rescue(
    async (req, res) => {
      const { name, email, password } = req.body;

      await userServices.create({ name, email, password });

      res.status(CREATED).end();
    },
  );
