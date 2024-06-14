import { Router } from "express";
import {
  handleRegister,
  handleLogin,
} from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/register", handleRegister);
authRoutes.post("/login", handleLogin);

export default authRoutes;
