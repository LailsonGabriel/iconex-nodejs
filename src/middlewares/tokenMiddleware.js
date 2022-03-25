const jwt = require("../../utils/jwt");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token not found" });
  }

  try {
    const user = jwt.verify(token);
    req.body.user = user;
    next();
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
