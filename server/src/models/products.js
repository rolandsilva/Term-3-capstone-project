import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const productsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
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
    features: {
      type: String,
      required: true,
    },
    specifications: {
      type: String,
      required: true,
    },
    availability: {
      type: Number,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productsSchema);

export default Products;
