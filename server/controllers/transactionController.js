import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
  try {
    const { amount, type, description } = req.body;

    if (!amount || !type) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const transaction = await Transaction.create({
      amount,
      type,
      description,
      user: req.user._id,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
