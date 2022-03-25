const jwt = require("../utils/jwt");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token not found" });
  }

  try {
    jwt.verify(token);

    next();
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
