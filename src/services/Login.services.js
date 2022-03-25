const { Company } = require("../models");
const { User } = require("../models");

const getCompanyByEmail = async (email) => {
  const company = await Company.findOne({ where: { email }, raw: true });

  return company;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email }, raw: true });
  return user;
};

module.exports = { getCompanyByEmail, getUserByEmail };
