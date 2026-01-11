import mongoose from "mongoose";
//Schema for products
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.model("Product", productSchema);
