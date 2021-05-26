import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="brand">
        <i className="fas fa-file-invoice-dollar"></i>
        MONEY LOAN
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" className="navLink">
          <i className="fas fa-home"></i>
          Home
        </NavLink>
        <NavLink to="/loans" className="navLink">
          <i className="fas fa-info"></i>
          Loans
        </NavLink>

        <a href="#calci" className="navLink">
          <i className="fas fa-calculator"></i>
          EMI Calculator
        </a>
      </div>
    </div>
  );
};

export default Header;
