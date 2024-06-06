import { Router } from "express";
import { Reviews } from "../models";
import {
  handleCreatereviews,
  handleDeleteReviews,
  handleVerifyreviews,
} from "../controllers/reviews.controller";

const reviewsRoutes = Router();

reviewsRoutes
.route("/reviews")
.get(handleGetReviews)
.post(handleCreateReviews)
.delete(handleDeleteReviews);

export default reviewsRoutes;


