const { Company } = require("../models");

const getCompanyById = async (id) => {
  const companies = await Company.findOne({ where: { id } });

  return companies;
};

const createCompany = async (body) => {
  const company = await Company.create({ ...body });

  return company;
};

const updateCompany = async (body, id) => {
  const company = await Company.update({ ...body }, { where: { id } });

  return company;
};

const deleteCompany = async (id) => {
  await Company.destroy({ where: { id } });
};

export { createCompany, updateCompany, getCompanyById, deleteCompany };
