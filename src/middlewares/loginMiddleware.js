const {
  getCompanyByEmail,
  getUserByEmail,
} = require("../services/Login.services");

const userMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);
  if (user.some((usr) => usr.email === email && usr.password === password)) {
    return res.status(402).json({ message: "Email ou senha inválidos" });
  }

  next();
};

const companyMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  const company = await getCompanyByEmail(email);
  if (company.some((cmp) => cmp.email === email && cmp.password === password)) {
    return res.status(402).json({ message: "Email ou senha inválidos" });
  }

  next();
};

module.exports = { companyMiddleware, userMiddleware };
