import { Router } from "express";
import { Customer } from "../models";
import {
  handleGetCustomerByCustomername,
  handleUpdateUser,
} from "../controllers/customer.controller";

const customerRoutes = Router();

usersRoutes
  .route("/:customername")
  .get(handleGetCustomerByCustomername)
  .put(handleUpdateCustomer);

export default customerRoutes;
