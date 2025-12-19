import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-new-container">

      <div className="signup-new-card">

        {/* LEFT SECTION — OPTIONAL IMAGE/ILLUSTRATION */}
        <div className="signup-new-left">
          <h2>Welcome to EduGo</h2>
          <p>Create your account and start exploring courses & departments.</p>
        </div>

        {/* RIGHT SECTION — FORM */}
        <div className="signup-new-right">
          <h3>Create Account</h3>

          <form>
            <div className="signup-input">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="signup-input">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="signup-input">
              <label>Password</label>
              <input type="password" placeholder="Create a password" required />
            </div>

            <div className="signup-input">
              <label>Confirm Password</label>
              <input type="password" placeholder="Re-enter password" required />
            </div>

            <button type="submit" className="signup-btn">Sign Up</button>

            <p className="signup-switch">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Signup;
