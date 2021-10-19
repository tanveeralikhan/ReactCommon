import React from "react";
import "./Header.scss";

const Header = (props) => {
  const openMenuBar = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__brand-title">BrandName</div>
        <a href="#" className="navbar__toggle-button" onClick={openMenuBar}>
          <span className="navbar__toggle-button__bar"></span>
          <span className="navbar__toggle-button__bar"></span>
          <span className="navbar__toggle-button__bar"></span>
        </a>
        <div className="navbar__navbar-Links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
