import React from "react";
import "./Login.css";
import loginImg from "../assets/login.jpg"; // <-- add your own image

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">

        {/* LEFT SIDE IMAGE */}
        <div className="login-image">
          <img src={loginImg} alt="Login" />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="login-form">
          <h2>Welcome Back</h2>
          <p>Please login to your EduGo account</p>

          <form>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />

            <button type="submit">Login</button>

            <div className="login-links">
              <a href="#">Forgot Password?</a>
              <a href="#">Create Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
