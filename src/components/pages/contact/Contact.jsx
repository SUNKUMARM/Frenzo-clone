import React from "react";
import "./contact.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        <p className="contact-title">
          Need help with a project? <p>Let's talk!</p>
        </p>
      </div>
      <div>
        <p className="contact-content">
          We are always looking for new projects to help take design to the next
          level! send us an email about your project at
          <a href="mailto:hello@frenzo.io?subject=contact%20us">
            hello@frenzo.io
          </a>
        </p>
      </div>
      <div className="footer">
        <div className="contact-footer">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/service"}>Services</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Work</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <div className="copyright">
          <p>© 2022 Frenzo. All Rights Reserved.</p>
          <p>Coimbatore, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
