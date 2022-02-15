const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;

const { userServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { email, password } = req.body;

    const { refreshToken, token } = await userServices.login({ email, password });

    res
    .status(OK)
    .cookie('refreshToken', refreshToken.id, {
      sameSite: 'none',
      path: '/',
      expires: new Date(refreshToken.expiresIn),
      httpOnly: true,
      secure: true,
      signed: true,
    })
    .json({ token });
  },
);
