import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./database/db.js";

dotenv.config();

await connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log("Server working at port ", process.env.PORT);
});
