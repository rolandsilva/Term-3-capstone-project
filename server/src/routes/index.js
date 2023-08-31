import { Router } from "express";
import { healthCheck } from "../controllers/api.controller";

const router = Router();

router.route("/").get(healthCheck);

export default router;
