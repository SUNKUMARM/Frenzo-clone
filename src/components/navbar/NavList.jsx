import React from "react";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <NavLink>Services</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Work</NavLink>
      <NavLink>Contact</NavLink>
    </>
  );
};

export default NavList;
