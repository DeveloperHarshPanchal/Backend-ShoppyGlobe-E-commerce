import express from "express";
import Product from "../Model/Product.js";

const router = express.Router();

//Get all products
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
//Get product by id
router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});
export default router;
