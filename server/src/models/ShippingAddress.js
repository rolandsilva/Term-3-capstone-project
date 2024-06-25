import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const shippingAddressSchema = new mongoose.Schema({
  shippingContactPhoneNumber: {
    type: String,
    required: true,
  },
  shippingAddress1: {
    type: String,
    required: true,
  },
  shippingAddress2: {
    type: String,
  },
  shippingCity: {
    type: String,
    required: true,
  },
  shippingState: {
    type: String,
    required: true,
  },
  shippingZipCode: {
    type: String,
    required: true,
  },
});

const ShippingAddress = mongoose.model("ShippingAddress", shippingAddressSchema);

export default ShippingAddress;
