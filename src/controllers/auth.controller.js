const rescue = require("express-rescue");
import jwt from "../../utils/jwt";

const login = rescue(async (req, res) => {
  const { email } = req.body;

  const token = jwt.sign(email);

  res.status(200).json({ token });
});

export { login };
