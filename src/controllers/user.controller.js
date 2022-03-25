import rescue from "express-rescue";
import {
  getUserById,
  createUser as create,
  updateUser as update,
  deleteUser as userDelete,
} from "../services/User.services";

const getById = rescue(async (req, res) => {
  const { id } = req.params;

  const user = await getUserById(id);

  res.status(200).json(user);
});

const updateUser = rescue(async (req, res) => {
  const body = req.body;
  const { id } = req.params;

  const userUpdated = await update(body, id);

  res.status(201).json(userUpdated);
});

const createUser = rescue(async (req, res) => {
  const user = req.body;

  const userCreated = await create(user);

  res.status(201).json(userCreated);
});

const deleteUser = rescue(async (req, res) => {
  const { id } = req.params;

  await userDelete(id);

  res.status(201).json({ message: "Usuário Deletado!" });
});

module.exports = { getById, createUser, updateUser, deleteUser };
