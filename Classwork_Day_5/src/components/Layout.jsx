import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="navbar-items">
        <Link to="/" className="navbar">
          Home
        </Link>
        <Link to="/about" className="navbar">
          About
        </Link>
        <Link to="/services" className="navbar">
          Services
        </Link>
        <Link to="/faq" className="navbar">
          FAQ
        </Link>
        <Link to="contact" className="navbar">
          Contact
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
