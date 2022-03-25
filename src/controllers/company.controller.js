const rescue = require("express-rescue");
import {
  createCompany as create,
  updateCompany as update,
  getCompanyById as getById,
  deleteCompany as deleteCmp,
} from "../services/CompanyServices";

const getCompanyById = rescue(async (req, res) => {
  const { id } = req.params;

  const company = await getById(id);

  res.status(200).json(company);
});

const updateCompany = rescue(async (req, res) => {
  const body = req.body;
  const { id } = req.params;

  const companyUpdated = await update(body, id);

  res.status(201).json(companyUpdated);
});

const createCompany = rescue(async (req, res) => {
  const user = req.body;

  const companyCreated = await create(user);

  res.status(201).json(companyCreated);
});

const deleteCompany = rescue(async (req, res) => {
  const { id } = req.params;

  await deleteCmp(id);

  res.status(201).json({ message: "Usuário Deletado!" });
});

module.exports = {
  getCompanyById,
  updateCompany,
  createCompany,
  deleteCompany,
};
