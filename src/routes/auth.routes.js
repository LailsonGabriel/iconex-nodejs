const express = require("express");
const router = express.Router();
import { login } from "../controllers/auth.controller";
const {
  companyMiddleware,
  userMiddleware,
} = require("../middlewares/loginMiddleware");

router.post("/user/login", companyMiddleware, login);
router.post("/company/login", userMiddleware, login);

export default router;
