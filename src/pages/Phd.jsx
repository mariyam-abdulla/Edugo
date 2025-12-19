import React from "react";
import "./Phd.css";

const Phd = () => {
  return (
    <div className="course-page">

      {/* ----------- MODERN HEADER ----------- */}
      <div className="course-header-new">
        <h1>Doctor of Philosophy (PhD)</h1>
        <p>
          A rigorous research-based doctoral program focusing on innovation, advanced learning, and contributing to global knowledge.
        </p>
      </div>

      {/* ----------- ABOUT SECTION ----------- */}
      <section className="course-section">
        <h2>About the PhD Program</h2>
        <p>
          The PhD program at EduGo University is designed for scholars aiming to pursue advanced research in engineering, technology, and science.
          Students work closely with faculty experts, publish research papers, participate in international conferences, and contribute to real-world innovation.
          <br /><br />
          The program nurtures critical thinking, research methodology, and interdisciplinary collaboration. Scholars gain hands-on experience with modern tools, simulation software, and laboratory techniques.
        </p>
      </section>

      {/* ----------- RESEARCH AREAS ----------- */}
      <section className="course-section">
        <h2>Research Areas</h2>
        <ul>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Robotics & Automation</li>
          <li>Thermal & Energy Systems</li>
          <li>Advanced Materials & Manufacturing</li>
          <li>Data Science & Computational Engineering</li>
          <li>Electronics & Embedded Systems</li>
        </ul>
      </section>

      {/* ----------- LABS & FACILITIES ----------- */}
      <section className="course-section">
        <h2>Research Labs & Facilities</h2>
        <p>
          Scholars have access to state-of-the-art research infrastructure, advanced computing resources, and specialized labs for experimentation and innovation.
        </p>
      </section>

      {/* ----------- ADMISSION REQUIREMENTS ----------- */}
      <section className="course-section">
        <h2>Admission Requirements</h2>
        <ul>
          <li>Master’s degree in a relevant discipline</li>
          <li>Minimum 60% or equivalent grade</li>
          <li>Entrance test + personal interview</li>
          <li>Strong research proposal in chosen field</li>
          <li>Publications (optional but preferred)</li>
        </ul>
      </section>

      {/* ----------- CONTACT SECTION (No Image) ----------- */}
      <div className="dept-card">
        <h2>Contact PhD Research Coordinator</h2>
        <div className="contact-details">
          <p>📌 Block D - Research & Innovation Center</p>
          <p>📞 +91 98765 43255</p>
          <p>📧 phd@edugo.ac.in</p>
        </div>
        <button className="contact-btn">Request More Info</button>
      </div>

    </div>
  );
};

export default Phd;
