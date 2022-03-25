const rescue = require("express-rescue");
const companyService = require("../services/Company.services");

const getCompanyById = rescue(async (req, res) => {
  const { id } = req.params;

  const company = await companyService.getCompanyById(id);

  res.status(200).json(company);
});

const updateCompany = rescue(async (req, res) => {
  const body = req.body;
  const { id } = req.params;

  const companyUpdated = await companyService.updateCompany(body, id);

  res.status(201).json(companyUpdated);
});

const createCompany = rescue(async (req, res) => {
  const user = req.body;

  const companyCreated = await companyService.createCompany(user);

  res.status(201).json(companyCreated);
});

const deleteCompany = rescue(async (req, res) => {
  const { id } = req.params;

  await companyService.deleteCompany(id);

  res.status(201).json({ message: "Usuário Deletado!" });
});

module.exports = {
  getCompanyById,
  updateCompany,
  createCompany,
  deleteCompany,
};
