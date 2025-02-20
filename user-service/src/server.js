import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)?.then(() => {
  console.log("Connected to MongoDB 📌");
}).catch(err => console.log("Error while connecting to MongoDB : ", err));

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => console.log(`User Service running on port ${process.env.PORT} 👤`));
