import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/argentBankLogo.png";
import "../style/Header.css";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <div>
          <Link to="/SignIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
