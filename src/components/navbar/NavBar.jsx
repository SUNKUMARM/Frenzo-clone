import React from "react";
import logo from "../assets/logo.png";
import "./navbar.css";
import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-image-parent">
        <img src={logo} alt="logo" />
      </div>
      <nav className="navbar-parent">
        <Link to="service" smooth={true} duration={500}>
          Services
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>

        {/* <NavLink to={"/service"}>Services</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Work</NavLink>
        <NavLink>Contact</NavLink> */}
      </nav>
    </div>
  );
};

export default NavBar;
