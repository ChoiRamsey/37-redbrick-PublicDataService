const { userService } = require("../services");
const auth = require("../utils/auth");
const { catchAsync } = require("../utils/error");

const getToken = catchAsync(async (req, res) => {
  const { code } = req.query;
  if (!code) throw new Error(`CODE_ERROR`);

  const result = await userService.getToken(code);

  return res.status(200).json({ token: result });
});

module.exports = {
  getToken,
};
