const verifyToken = require("../middlewares/tokenMiddleware");
const express = require("express");
const router = express.Router();
const {
  getCompanyById,
  updateCompany,
  createCompany,
  deleteCompany,
} = require("../controllers/company.controller");

router.get("/:id", verifyToken, getCompanyById);
router.post("/", createCompany);
router.put("/:id", verifyToken, updateCompany);
router.delete("/:id", verifyToken, deleteCompany);

module.exports = router;
