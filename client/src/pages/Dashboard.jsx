import React from "react";
import RequireAuthContent from "../components/RequireAuthContent";

const Dashboard = () => {
  return (
    <RequireAuthContent>
      <p>Your personal dashboard data</p>
    </RequireAuthContent>
  );
};

export default Dashboard;
