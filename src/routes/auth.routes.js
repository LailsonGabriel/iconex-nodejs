const express = require("express");
const router = express.Router();
const login = require("../controllers/auth.controller");
const {
  companyMiddleware,
  userMiddleware,
} = require("../middlewares/loginMiddleware");

const { createCompany } = require("../controllers/company.controller");
const { createUser } = require("../controllers/user.controller");

router.post("/user/login", userMiddleware, login);
router.post("/company/login", companyMiddleware, login);
router.post("/company/register", createCompany);
router.post("/user/register", createUser);

module.exports = router;
