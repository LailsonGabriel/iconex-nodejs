const verifyToken = require("../middlewares/tokenMiddleware");
const express = require("express");
const router = express.Router();
const {
  getById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/:id", verifyToken, getById);
router.post("/", createUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
