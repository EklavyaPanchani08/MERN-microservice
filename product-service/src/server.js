import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/products.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)?.then(() => {
  console.log("Connected to MongoDB 📌");
}).catch(err => console.log("Error while connecting to MongoDB : ", err));

app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => console.log(`Product Service running on port ${process.env.PORT} 👤`));
