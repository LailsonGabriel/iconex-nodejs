const rescue = require("express-rescue");
const jwt = require("../utils/jwt");
const userService = require("../services/User.services");

const getById = rescue(async (req, res) => {
  const { id } = req.params;

  const user = await userService.getUserById(id);

  res.status(200).json(user);
});

const updateUser = rescue(async (req, res) => {
  const body = req.body;
  const { id } = req.params;

  const userUpdated = await userService.updateUser(body, id);

  res.status(201).json(userUpdated);
});

const createUser = rescue(async (req, res) => {
  const user = req.body;

  if (req.route.path === "/user/register") {
    const token = jwt.sign({ email: req.body.email });
    return res.status(201).json({ token });
  }

  const userCreated = await userService.createUser(user);

  res.status(201).json(userCreated);
});

const deleteUser = rescue(async (req, res) => {
  const { id } = req.params;

  await userService.deleteUser(id);

  res.status(201).json({ message: "Usuário Deletado!" });
});

module.exports = { getById, createUser, updateUser, deleteUser };
