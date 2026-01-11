import express from "express";
import connectDB from "./Config/db.js";
import authRoutes from "./Routes/authRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";

connectDB();

const app = express();

app.use(express.json());

app.use("/", authRoutes);
app.use("/", productRoutes);
app.use("/", cartRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
