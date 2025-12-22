import React from "react";
import RequireAuthContent from "../components/RequireAuthContent";

const Budgets = () => {
  return (
    <RequireAuthContent>
      <p>Your personal budget data</p>
    </RequireAuthContent>
  );
};

export default Budgets;
