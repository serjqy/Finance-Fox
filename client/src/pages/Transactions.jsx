import { useTransactions } from "../context/TransactionContext";
import RequireAuthContent from "../components/RequireAuthContent";
import TransactionCard from "../components/TransactionCard";
import CreateTransaction from "../components/CreateTransaction";

const Transactions = () => {
  const { transactions, loading, error } = useTransactions();

  return (
    <RequireAuthContent>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <section className="transaction">
        <CreateTransaction />
        <div className="transaction-list">
          {transactions.map((t) => (
            <TransactionCard key={t._id} transaction={t} />
          ))}
        </div>
      </section>
    </RequireAuthContent>
  );
};

export default Transactions;
