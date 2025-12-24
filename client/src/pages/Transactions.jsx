import { useTransactions } from "../context/TransactionContext";
import RequireAuthContent from "../components/RequireAuthContent";
import TransactionCard from "../components/TransactionCard";

const Transactions = () => {
  const { transactions, loading, error } = useTransactions();

  return (
    <RequireAuthContent>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <section className="transaction">
        {transactions.map((t) => (
          <TransactionCard key={t._id} transaction={t} />
        ))}
      </section>
    </RequireAuthContent>
  );
};

export default Transactions;
