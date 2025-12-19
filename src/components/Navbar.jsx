import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <h2>EduGo</h2>
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>

        {/* Department Dropdown */}
        <li className="dropdown">
          <span onClick={() => setDeptOpen(!deptOpen)}>Department ▾</span>
          <ul className={`dropdown-menu ${deptOpen ? "show" : ""}`}>
            <li><Link to="/department/cs">Computer Science</Link></li>
            <li><Link to="/department/mech">Mechanical</Link></li>
            <li><Link to="/department/civil">Civil</Link></li>
            <li><Link to="/department/ee">Electrical</Link></li>
          </ul>
        </li>

        {/* Courses Dropdown */}
        <li className="dropdown">
          <span onClick={() => setCourseOpen(!courseOpen)}>Courses ▾</span>
          <ul className={`dropdown-menu ${courseOpen ? "show" : ""}`}>
            <li><Link to="/courses/btech">B.Tech</Link></li>
            <li><Link to="/courses/mtech">M.Tech</Link></li>
            <li><Link to="/courses/diploma">Diploma</Link></li>
            <li><Link to="/courses/phd">PhD</Link></li>
          </ul>
        </li>

      </ul>

      {/* AUTH BUTTONS */}
      <div className="auth-btns">
        <Link className="login" to="/login" style={{textDecoration:"none"}}>Login</Link>
        <Link className="signup" to="/signup"style={{textDecoration:"none"}}>Sign Up</Link>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>

      {/* MOBILE MENU */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>

        {/* Department Mobile */}
        <li className="dropdown">
          <span onClick={() => setDeptOpen(!deptOpen)}>Department ▾</span>
          <ul className={`dropdown-menu ${deptOpen ? "show" : ""}`}>
            <li><Link to="/department/cs" onClick={() => setMenuOpen(false)}>Computer Science</Link></li>
            <li><Link to="/department/mech" onClick={() => setMenuOpen(false)}>Mechanical</Link></li>
            <li><Link to="/department/civil" onClick={() => setMenuOpen(false)}>Civil</Link></li>
            <li><Link to="/department/ee" onClick={() => setMenuOpen(false)}>Electrical</Link></li>
          </ul>
        </li>

        {/* Courses Mobile */}
        <li className="dropdown">
          <span onClick={() => setCourseOpen(!courseOpen)}>Courses ▾</span>
          <ul className={`dropdown-menu ${courseOpen ? "show" : ""}`}>
            <li><Link to="/courses/btech" onClick={() => setMenuOpen(false)}>B.Tech</Link></li>
            <li><Link to="/courses/mtech" onClick={() => setMenuOpen(false)}>M.Tech</Link></li>
            <li><Link to="/courses/diploma" onClick={() => setMenuOpen(false)}>Diploma</Link></li>
            <li><Link to="/courses/phd" onClick={() => setMenuOpen(false)}>PhD</Link></li>
          </ul>
        </li>

        {/* Mobile Auth */}
        <div className="mobile-auth">
          <Link className="login" to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link className="signup" to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
        </div>
      </ul>

    </nav>
  );
};

export default Navbar;
