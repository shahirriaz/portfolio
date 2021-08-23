import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <img src={logo} alt="SR studios" />
        </div>
        <div className="header__right">
          <button>Say Hello</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
