import React from "react";

import { Link } from "react-router-dom";
//Styles
import "./style.scss";

//Assets
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo />
      <div className="menu-container">
        <div className="burger-menu">
          <span></span>
          <span className="middle"></span>
          <span></span>
        </div>
        <div className="side-menu">
          <Link to="/home">الكاشير</Link>

          <Link to="/statistics">الإحصائيات</Link>

          <button>تسجيل الخروج</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
