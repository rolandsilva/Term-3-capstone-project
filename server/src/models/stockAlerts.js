import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const stockAlertsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const StockAlerts = mongoose.model("StockAlerts", stockAlertsSchema);

export default StockAlerts;
