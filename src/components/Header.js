import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/argentBankLogo.png";
import "../style/Header.css";

import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "features/user/userSlice";
import { resetState } from "features/browser/browserStorage";

const Header = () => {

  const dispatch = useDispatch();

  const loginInfos = useSelector(state => state.user.loginInfos)

  const userName = useSelector(state => state.user.firstName)

  const SignOut = (userName) => {
    return (
    <div className="signHeader">   
      <Link to="/profile" className="main-nav-item">
        <i class="fa fa-user-circle"></i>
        {userName}
      </Link>
      <Link to="/"className="main-nav-item" onClick={() => {
        dispatch(setLogout())
        resetState()
        }}>
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
    )
  }

  const SignIn = () => {
    return (
      <div>
        <Link to="/SignIn" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    )
  }

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
          {loginInfos ? 
          SignOut(userName)
          : 
          SignIn()
          }
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
