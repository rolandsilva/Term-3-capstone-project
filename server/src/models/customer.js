import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const customerSchema = new mongoose.Schema({
  customerFirstName: {
    type: String,
    required: true,
  },
  customerLastName: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerAddress1: {
    type: String,
    required: true,
  },
  customerAddress2: {
    type: String,
  },
  customerCity: {
    type: String,
    required: true,
  },
  customerState: {
    type: String,
    required: true,
  },
  customerZipCode: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
    required: true,
  },
  // customerPassword: {
  //   type: String,
  //   required: true,
  // },

  orders: [
    {
      type: ObjectId,
      ref: "Order",
    },
  ],
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
