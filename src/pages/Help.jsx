import React, { useEffect } from "react";
import "./Help.css";

const Help = () => {

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="help-page animate-help">

      {/* ======= HEADER ======= */}
      <div className="help-header">
        <h1>Help & Support</h1>
        <p>
          We're here to assist you! Browse the sections below to find answers
          to common questions or reach out directly for help.
        </p>
      </div>

      {/* ======= SECTION 1 ======= */}
      <div className="help-section">
        <h2>📌 How to Navigate the Website?</h2>
        <p>
          Use the top navigation bar to explore courses, departments,
          admissions, and student resources. The website is fully responsive
          and works on all devices.
        </p>
      </div>

      {/* ======= SECTION 2 ======= */}
      <div className="help-section">
        <h2>🔐 Issues With Login or Signup?</h2>
        <p>
          If you are unable to log in or sign up, ensure that:
        </p>
        <ul>
          <li>Your email is correctly formatted.</li>
          <li>Your password meets the security requirements.</li>
          <li>You have verified your email if required.</li>
        </ul>
      </div>

      {/* ======= SECTION 3 ======= */}
      <div className="help-section">
        <h2>📞 Need More Assistance?</h2>
        <p>
          If you can’t find the solution you're looking for, feel free to reach
          us using the contact page. Our support team typically responds within
          24 hours.
        </p>
      </div>

      {/* ======= FOOTER ======= */}
      <div className="help-footer">
        <h3>Still Need Help?</h3>
        <p>Email: support@edugo.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>

    </div>
  );
};

export default Help;
