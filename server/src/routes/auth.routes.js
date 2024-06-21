import { Router } from "express";
import {
  handleRegister,
  handleLogin,
  handleChangePassword,
} from "../controllers/auth.controller";
import requireAuth from "../middleware/requireAuth";

const authRoutes = Router();

authRoutes.post("/register", handleRegister);
authRoutes.post("/login", handleLogin);
authRoutes.put("/update-password", requireAuth, handleChangePassword);

export default authRoutes;
