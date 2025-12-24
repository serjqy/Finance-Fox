import React, { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

const CreateTransaction = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState("");

  const { addTransaction, error, loading } = useTransactions();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !type || !amount) {
      setFormError("Please fill all required fields");
      return;
    }

    setFormError("");

    addTransaction({
      title,
      type,
      amount: Number(amount),
      description,
    });

    setTitle("");
    setType("");
    setAmount("");
    setDescription("");
  };

  return (
    <div className="transaction-form">
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button className="btn btn-secondary" type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Transaction"}
        </button>

        {formError && <p className="error">{formError}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default CreateTransaction;
