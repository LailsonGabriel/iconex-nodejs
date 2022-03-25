const { User } = require("../models");

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });

  return user;
};

const createUser = async (body) => {
  const user = await User.create({ ...body });

  return user;
};

const updateUser = async (body, id) => {
  const user = await User.update({ ...body }, { where: { id } });

  return user;
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

export { getUserById, createUser, updateUser, deleteUser };
