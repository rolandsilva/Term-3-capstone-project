import { Router } from "express";
import { handleRegister } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/register", handleRegister);

export default authRoutes;
