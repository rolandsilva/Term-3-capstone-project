import { Router } from "express";
import { Order } from "../models";
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
  .delete(handleDeleteOrder);

export default ordersRoutes;
