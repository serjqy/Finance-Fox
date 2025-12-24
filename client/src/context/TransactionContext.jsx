import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const { user } = useAuth();

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTransactions = async () => {
    if (!user) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8000/api/transactions", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch transactions");
      }

      setTransactions(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addTransaction = async (transactionData) => {
    if (!user) return;
    try {
      const res = await fetch("http://localhost:8000/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(transactionData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add transaction");
      }

      setTransactions((prev) => [data, ...prev]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTransaction = async (id) => {
    await fetch(`http://localhost:8000/api/transactions/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    setTransactions((prev) => prev.filter((t) => t._id !== id));
  };

  useEffect(() => {
    if (user) {
      fetchTransactions();
    } else {
      setTransactions([]);
    }
  }, [user]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        loading,
        error,
        fetchTransactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
