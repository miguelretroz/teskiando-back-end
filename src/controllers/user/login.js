const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;

const { userServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { email, password } = req.body;

    const { refreshToken, token } = await userServices.login({ email, password });

    res.cookie('refreshToken', refreshToken.id, {
      sameSite: 'strict',
      path: '/',
      expires: new Date(refreshToken.expiresIn),
      httpOnly: true,
      secure: true,
    });

    res.status(OK).json({ token });
  },
);
