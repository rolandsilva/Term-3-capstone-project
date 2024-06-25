import { Router } from "express";
import { requireAuth } from "../middleware";
import { Products } from "../models";
import {
  // handleCreateProduct,
  handleGetProductById,
  handleGetProducts,
  // handleLikeProduct,
  handleGetProductsByCategories,
} from "../controllers/products.controller";

const productsRoutes = Router();

productsRoutes.route("/").get(handleGetProducts)//.post(handleCreateProduct);

productsRoutes.route("/:id").get(handleGetProductById);

// productsRoutes.route("/like/:productId").all(requireAuth, handleLikeProduct);

productsRoutes.route("/categories/:name").get(handleGetProductsByCategories);

export default productsRoutes;
