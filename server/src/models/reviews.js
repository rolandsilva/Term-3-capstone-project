import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const reviewsSchema = new mongoose.Schema(
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
    rating: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Reviews = mongoose.model("Reviews", reviewsSchema);

export default Reviews;
