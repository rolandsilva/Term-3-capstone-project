import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const ordersSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      // required: true,
    },
    orderNumber: {
      type: Number,
      // required: true,
    },

    orderContents: [
      {
        productNbr: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        
        category: {
          type: String,
          required: true,
        },

        price: {
          type: Number,
          required: true,
        },
      

        itemQuantity: {
          type: Number,
          required: true,
        },

        image_url: {
          type: String,
          required: true,
        },
      },
    ],
    couponRate: {
      type: Number,
      required: true,
    },
    orderTotal: {
      type: Number,
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
