import React from "react";
import RequireAuthContent from "../components/RequireAuthContent";

const Transactions = () => {
  return (
    <RequireAuthContent>
      <p>Transactions</p>
    </RequireAuthContent>
  );
};

export default Transactions;
