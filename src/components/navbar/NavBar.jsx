import React from "react";
import logo from "../assets/logo.png";
import "./navbar.css";
import NavList from "./NavList";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-image-parent">
        <img src={logo} alt="logo" />
      </div>
      <nav className="navbar-parent">
        <NavList />
      </nav>
    </div>
  );
};

export default NavBar;
