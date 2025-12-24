import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
} from "../controllers/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/", createTransaction);
router.get("/", getTransactions);
router.delete("/:id", deleteTransaction);

export default router;
