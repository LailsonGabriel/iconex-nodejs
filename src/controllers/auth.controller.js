const rescue = require("express-rescue");
const jwt = require("../utils/jwt");
const loginService = require("../services/Login.services");

const login = rescue(async (req, res) => {
  const { email } = req.body;

  const token = jwt.sign(email);

  if (req.route.path === "/user/login") {
    const user = await loginService.getUserByEmail(email);
    return res.status(200).json({ token, result: user });
  }

  const company = await loginService.getCompanyByEmail(email);

  res.status(200).json({ token, result: company });
});

module.exports = login;
