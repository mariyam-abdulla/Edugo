import React, { useEffect } from "react";
import "./Contact.css";
import contactImg from "../assets/contact-page.jpg";

const Contact = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="contact-container contact-fade-in">
      <div className="contact-wrapper">

        {/* LEFT SIDE IMAGE */}
        <div className="contact-image">
          <img src={contactImg} alt="Contact EduGo" />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Fill out the form below.</p>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="5" placeholder="Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
