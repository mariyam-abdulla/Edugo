import React, { useEffect, useRef } from "react";
import "./CS.css";
import labImg from "../assets/cs-lab.jpg";

const CS = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pageRef.current) {
      pageRef.current.classList.add("fade-slide");
    }
  }, []);

  return (
    <div className="cs-page fade-slide" ref={pageRef}>

      {/* ---------- PAGE HEADER ---------- */}
      <section className="cs-header">
        <h1>Computer Science & Engineering</h1>
        <p>
          Shaping the future with innovative technology, AI, cloud computing, and cybersecurity.
          Empowering students to excel in the global tech industry.
        </p>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="cs-section">
        <h2>About the Department</h2>
        <p>
          EduGo's Computer Science Department specializes in modern software development,
          AI, machine learning, cybersecurity, data science, cloud computing, and full-stack development.
        </p>
        <p>
          Our programs prepare students with practical labs, hands-on projects, and industry-focused learning.
          Equipped with advanced systems and licensed software tools, students gain real-world experience.
        </p>
      </section>

      {/* ---------- COURSES ---------- */}
      <section className="cs-section">
        <h2>Courses Offered</h2>
        <ul className="cs-list">
          <li>B.Tech in Computer Science</li>
          <li>M.Tech in Computer Science</li>
          <li>Diploma in Software Engineering</li>
          <li>PhD in Computer Science</li>
        </ul>
      </section>

      {/* ---------- LAB SECTION (ONLY IMAGE) ---------- */}
      <section className="cs-img-card">
        <div className="img-box">
          <img src={labImg} alt="Computer Lab" className="section-img" />
        </div>
        <div className="img-content">
          <h2>State-of-the-art Computer Labs</h2>
          <p>
            Our computer labs are designed to support modern learning with powerful systems,
            GPU-enabled machines, high-speed internet, and licensed tools for software development.
          </p>
          <p>
            Students actively work on real-world projects in areas like AI, cybersecurity,
            machine learning, networking, and full-stack development, ensuring strong technical expertise.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section className="cs-contact-new">
        <h2>Contact Computer Science Department</h2>
        <p className="cs-contact-row">📍 Block B - Computer Science Building</p>
        <p className="cs-contact-row">📞 +91 98765 40010</p>
        <p className="cs-contact-row">📧 cs@edugo.ac.in</p>
        <button className="cs-contact-btn">Request More Info</button>
      </section>

    </div>
  );
};

export default CS;
