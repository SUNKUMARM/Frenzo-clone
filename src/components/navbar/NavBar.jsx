import React from "react";
import logo from "../assets/logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-image-parent">
        <img src={logo} alt="logo" />
      </div>
      <nav className="navbar-parent">
        <NavLink to={"/service"}>Services</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Work</NavLink>
        <NavLink>Contact</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
