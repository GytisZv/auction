const sendRes = require('./sendResponse');

module.exports = {
  validateRegistration: (req, res, next) => {
    const { passOne, passTwo } = req.body;

    if (passOne !== passTwo) return sendRes(res, 'bad password', true);

    next();
  },
};
