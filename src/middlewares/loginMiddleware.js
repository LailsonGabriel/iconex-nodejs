const {
  getCompanyByEmail,
  getUserByEmail,
} = require("../services/Login.services");

const userMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  const user = await getUserByEmail(email);
  if (!user || user.email !== email || user.password !== password) {
    return res.status(402).json({ message: "Email ou senha inválidos" });
  }

  next();
};

const companyMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  const company = await getCompanyByEmail(email);
  if (!company || company.email !== email || company.password !== password) {
    return res.status(402).json({ message: "Email ou senha inválidos" });
  }

  next();
};

module.exports = { companyMiddleware, userMiddleware };
