import { Router } from "express";
import { Order } from "../models";
import requireAuth from "../middleware/requireAuth";
import {
  handleCreateOrder,
  handleDeleteOrder,
  handleGetOrders,
  handleGetOrdersByCustomerId,
} from "../controllers/orders.controller";

const ordersRoutes = Router();

ordersRoutes
  .route("/")
  // .get(handleGetOrders)
  .post(requireAuth, handleCreateOrder)
  .delete(requireAuth, handleDeleteOrder)
  .get(requireAuth, handleGetOrdersByCustomerId)
export default ordersRoutes;
