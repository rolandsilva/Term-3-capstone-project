import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const ordersSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    orderNumber: {
      type: Number,
      required: true,
    },
    itemNumber: {
      type: Number,
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
    specifications: {
      type: String,
      required: true,
    },
    shippingTime: {
      type: Number,
      required: true,
    },
    shippingDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", ordersSchema);

export default Orders;
