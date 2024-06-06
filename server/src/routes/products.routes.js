import { Router } from "express";
import { requireAuth } from "../middleware";
import { Products } from "../models";
import {
  handleCreateProduct,
  handleGetProductById,
  handleGetProducts,
  handleLikeProduct,
} from "../controllers/products.controller";

const productsRoutes = Router();

productsRoutes.route("/").get(handleGetProducts).post(handleCreateProduct);

productsRoutes.route("/:id").get(handleGetProductById);

productsRoutes.route("/like/:productId").all(requireAuth, handleLikeProduct);

export default productsRoutes;
