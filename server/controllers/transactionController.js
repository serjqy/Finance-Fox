import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
  try {
    const { title, amount, type, description } = req.body;

    if (!title || !amount || !type) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const transaction = await Transaction.create({
      title,
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

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (transaction.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await transaction.deleteOne();

    res.json({ message: "Transaction deleted", id });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
