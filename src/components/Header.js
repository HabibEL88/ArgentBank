import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";
import "../style/header.css";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link to="#" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <div>
          <Link to="#" className="main-nav-item">
            <FaUserCircle />
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
