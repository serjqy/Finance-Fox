import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  const location = useLocation();

  const titles = {
    "/": "Dashboard",
    "/transactions": "Transactions",
    "/budgets": "Budgets",
    "/pots": "Pots",
    "/reccuring-bills": "Recurring Bills",
    "/login": "Login",
    "/register": "Register",
  };

  const pageTitle = titles[location.pathname] || "Finance";

  return (
    <header className="header">
      <h1 className="header__title">{pageTitle}</h1>
      <div className="header__cta">
        {user && (
          <>
            <span className="header__user">@{user.username}</span>
            <button onClick={logout} className="btn">
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
