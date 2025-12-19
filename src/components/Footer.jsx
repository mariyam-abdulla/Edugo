import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COLUMN 1 - BRAND */}
        <div className="footer-col">
          {/* <div className="footer-logo">
            <img src={logo} alt="EduGo Logo" />
            <h2>EduGo</h2>
          </div> */}
          <p className="footer-text">
            Empowering students with world-class learning and academic excellence.
          </p>
        </div>

        {/* COLUMN 2 - QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            {/* <li><Link to="/courses">Courses</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 - SUPPORT */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy">Pivacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* COLUMN 4 - NEWSLETTER */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p className="footer-text">Subscribe for updates & offers.</p>

          <div className="footer-input">
            <input type="email" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EduGo. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
