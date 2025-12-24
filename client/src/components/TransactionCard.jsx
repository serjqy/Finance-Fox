import React from "react";
import { useTransactions } from "../context/TransactionContext";

const TransactionCard = ({ transaction }) => {
  const { deleteTransaction, error, loading } = useTransactions();
  return (
    <div className="transaction-card">
      <div className="transaction-card__content">
        <h2 className="transaction-card__title">{transaction.title}</h2>

        <h3 className="transaction-card__type">Type: {transaction.type}</h3>

        <p className="transaction-card__amount">Amount: {transaction.amount}</p>

        {transaction.description && (
          <p className="transaction-card__description">
            {transaction.description}
          </p>
        )}
        <span className="transaction-card__date">
          Created: {new Date(transaction.createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="transaction-card__setting">
        <button
          className="btn btn-primary"
          onClick={() => deleteTransaction(transaction._id)}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
