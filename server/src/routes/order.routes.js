import { Router } from "express";
import { Order } from "../models";
import requireAuth from "../middleware/requireAuth";
import {
  handleCreateOrder,
  handleDeleteOrder,
  handleGetOrders,
} from "../controllers/orders.controller";

const ordersRoutes = Router();

ordersRoutes
  .route("/")
  .get(handleGetOrders)
  .post(handleCreateOrder)
  .delete(requireAuth, handleDeleteOrder);

export default ordersRoutes;
