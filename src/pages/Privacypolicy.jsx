import React, { useEffect, useRef } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const pageRef = useRef(null);

  // Scroll to top + trigger animation when component loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Add animation class
    if (pageRef.current) {
      pageRef.current.classList.add("animate-privacy");
    }
  }, []);

  return (
    <div className="privacy-page animate-privacy" ref={pageRef}>
      
      {/* HEADER */}
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This policy explains how EduGo collects,
          uses, and protects your personal information.
        </p>
      </div>

      {/* SECTIONS */}
      <section className="privacy-section">
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          contact number, and any information you provide when registering for
          courses, newsletters, or support.
        </p>
      </section>

      <section className="privacy-section">
        <h2>2. How We Use Your Information</h2>
        <p>
          Your information is used to improve our services, provide updates, send 
          educational resources, respond to inquiries, and for internal record keeping. 
          We do not sell your personal information to third parties.
        </p>
      </section>

      <section className="privacy-section">
        <h2>3. Cookies and Tracking</h2>
        <p>
          We may use cookies and similar technologies to enhance user experience,
          track website usage, and analyze trends. You can adjust your browser
          settings to refuse cookies.
        </p>
      </section>

      <section className="privacy-section">
        <h2>4. Data Security</h2>
        <p>
          EduGo implements strict security measures to protect your information.
          However, no online service is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section className="privacy-section">
        <h2>5. Third-Party Services</h2>
        <p>
          Our website may contain links to third-party websites. EduGo is not
          responsible for the privacy practices or content of external sites.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information.
          For any inquiries regarding your data, contact us at 
          <strong> privacy@edugo.ac.in</strong>.
        </p>
      </section>

      {/* FOOTER */}
      <div className="privacy-footer">
        <h3>Contact EduGo</h3>
        <p>📧 Email: privacy@edugo.ac.in</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📍 EduGo Campus, Block A</p>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
