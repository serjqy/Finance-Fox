import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

dotenv.config();

await connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server working at port ", process.env.PORT);
});
