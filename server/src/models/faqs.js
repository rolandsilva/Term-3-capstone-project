import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const faqsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    faqInformation: {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true }
);

const Faqs = mongoose.model("Faqs", faqsSchema);

export default Faqs;
