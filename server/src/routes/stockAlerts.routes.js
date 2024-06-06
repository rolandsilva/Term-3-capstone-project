import { Router } from "express";
import { StockAlerts } from "../models";
import {
  handleGetStockAlertsByStockAlertsname,
  handleUpdateUser,
} from "../controllers/stockAlerts.controller";

const stockAlertsRoutes = Router();

usersRoutes
  .route("/:stockAlertsname")
  .get(handleGetStockAlertsByStockAlertsname)
  .put(handleUpdateStockAlerts);

export default stockAlertsRoutes;
