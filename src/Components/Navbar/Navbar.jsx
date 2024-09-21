import React, { useState } from "react";
import hamburger from "../../assets/hamburger.png";
import "./Navbar.css";

export default function Navbar() {
  const [hamMenuClicked, setHamMenuClicked] = useState(false);

  const openSideBarHamMenu = () => {
    setHamMenuClicked((prev) => !prev);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="logo-name-container">
          <h1 className="logo">CHECKUP</h1>
        </div>
        <div className="hamburger-container">
          <img
            onClick={openSideBarHamMenu}
            src={hamburger}
            className="hamburger-img"
            alt="menu"
          />
        </div>
      </div>
      {hamMenuClicked && (
        <div className="hamMenu-sideBar">
          {/* <h1>Side Menu Clicked</h1> */}
          <div className="hamburger-sidebar-container">
            <img
              onClick={openSideBarHamMenu}
              src={hamburger}
              className="hamburger-sidebar-img"
              alt="menu"
            />
          </div>
          <div className="sidebar-munuContainer">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Check your Health</p>
          </div>
        </div>
      )}
    </>
  );
}
