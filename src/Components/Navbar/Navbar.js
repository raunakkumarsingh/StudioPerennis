import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import logo from '../../assets/icons/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar fixed-top">
      <Link to="/">
        <div className="nav-logo strong-text mx-4">
          {/* <img  src="" className="logo rounded-circle" alt=""  /> */}
          StudioPerennis
        </div>
      </Link>
      <div className={`nav-items ${isOpen ? "open" : ""} d-flex `}>
        <Link onClick={() => setIsOpen(!isOpen)}  to="/home"><strong>Home</strong></Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/courses"><strong>courses</strong></Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/blog"><strong>Blog</strong></Link>
        <Link onClick={() => setIsOpen(!isOpen)}  to="/contact"><strong>contact</strong></Link>
      </div>
      <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;