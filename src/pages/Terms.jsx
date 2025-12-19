import React, { useEffect, useRef } from "react";
import "./Terms.css";

const Terms = () => {
  const pageRef = useRef(null);

  // Scroll to top + trigger animation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (pageRef.current) {
      pageRef.current.classList.add("animate-terms");
    }
  }, []);

  return (
    <div className="terms-page animate-terms" ref={pageRef}>

      {/* HEADER */}
      <div className="terms-header">
        <h1>Terms and Conditions</h1>
        <p>
          Please read these terms and conditions carefully before using EduGo services.
        </p>
      </div>

      {/* SECTIONS */}
      <section className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the EduGo website, you agree to comply with these
          terms and conditions. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. User Responsibilities</h2>
        <p>
          Users are responsible for providing accurate information during
          registration and for maintaining the confidentiality of their account
          credentials. You agree not to misuse the website or engage in harmful
          activities.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Intellectual Property</h2>
        <p>
          All content, including text, images, logos, and course materials, belongs
          to EduGo. Reproduction or distribution without permission is prohibited.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Limitation of Liability</h2>
        <p>
          EduGo is not responsible for damages or losses resulting from the use of
          our website or services. All information is subject to change.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Third-Party Links</h2>
        <p>
          EduGo may contain links to third-party websites. We are not responsible
          for their content or privacy practices.
        </p>
      </section>

      <section className="terms-section">
        <h2>6. Changes to Terms</h2>
        <p>
          EduGo reserves the right to update or modify these terms at any time.
          Please review them periodically.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Disputes will be handled
          under Indian court jurisdiction.
        </p>
      </section>

      {/* FOOTER */}
      <div className="terms-footer">
        <h3>Contact EduGo</h3>
        <p>📧 Email: support@edugo.ac.in</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📍 EduGo Campus, Block A</p>
      </div>

    </div>
  );
};

export default Terms;
