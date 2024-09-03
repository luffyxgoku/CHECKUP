import React from "react";
import hamburger from "../../assets/hamburger.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-name-container">
        <h1 className="logo">CHECKUP</h1>
      </div>
      <div className="hamburger-container">
        <img src={hamburger} className="hamburger-img" alt="menu" />
      </div>
    </div>
  );
}
