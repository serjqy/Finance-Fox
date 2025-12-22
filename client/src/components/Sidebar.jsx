import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <h2 className="sidebar__logo">Finance Fox</h2>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Dashboard
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/transactions" className="nav__link">
              Transactions
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/budgets" className="nav__link">
              Budgets
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/pots" className="nav__link">
              Pots
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/reccuring-bills" className="nav__link">
              Reccuring Bills
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
