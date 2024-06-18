import { Router } from "express";
import { healthCheck } from "../controllers/api.controller";
import authRoutes from "./auth.routes";
// import userRoutes from "./users.routes";
import orderRoutes from "./order.routes";
import productRoutes from "./products.routes";
// import couponsRoutes from "./coupons.routes";

const router = Router();

// router.route("/").get(healthCheck);

router.get("/", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.use("/auth", authRoutes);
//   router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);
//   router.use("/coupons", couponsRoutes);
export default router;
