import express from "express";
import Cart from "../Model/Cart.js";
import Product from "../Model/Product.js";
import protect from "../Middleware/authMiddleware.js";

const router = express.Router();

// Add to cart
router.post("/cart", protect, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const item = await Cart.create({
      userId: req.user.id,
      productId,
      quantity,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update cart item
router.put("/cart/:id", protect, async (req, res) => {
  try {
    const item = await Cart.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { quantity: req.body.quantity },
      { new: true }
    );

    if (!item) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete cart item (FIXED)
router.delete("/cart/:id", protect, async (req, res) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json({ message: "Item removed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
