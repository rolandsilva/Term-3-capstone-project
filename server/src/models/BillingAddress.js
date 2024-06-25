import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const billingAddressSchema = new mongoose.Schema({
  billingAddress1: {
    type: String,
    required: true,
  },
  billingAddress2: {
    type: String,
  },
  billingCity: {
    type: String,
    required: true,
  },
  billingState: {
    type: String,
    required: true,
  },
  billingZipCode: {
    type: String,
    required: true,
  },
});

const BillingAddress = mongoose.model("BillingAddress", billingAddressSchema);

export default BillingAddress;
