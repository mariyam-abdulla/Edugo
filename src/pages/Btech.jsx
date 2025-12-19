import React from "react";
import "./Btech.css";
import labImg from "../assets/btech-lab.jpg";

const Btech = () => {
  return (
    <div className="course-page">

      {/* NEW GRADIENT HEADER WITHOUT IMAGE */}
      <div className="course-header-new">
        <h1>🎓 Bachelor of Technology (B.Tech)</h1>
        <p>
          A 4-year undergraduate program focusing on core engineering fundamentals, practical skills, and innovation.
        </p>
      </div>

      {/* ABOUT */}
      <section className="course-section">
        <h2>About B.Tech</h2>
        <p>
          The B.Tech program at EduGo prepares students with practical knowledge, problem-solving skills, 
          and modern engineering expertise. Students learn programming, hardware design, electronics, 
          mechanical systems, and innovative technologies. 
          <br /><br />
          Our curriculum emphasizes hands-on lab experience, industrial visits, workshops, and team projects. 
          Students are trained to think critically, apply engineering principles, and design real-world solutions. 
          <br /><br />
          Graduates are well-equipped for careers in industries, research, entrepreneurship, and higher studies.
        </p>
      </section>

      {/* LABS */}
      <section className="course-section">
        <h2>Labs & Facilities</h2>
        <p>
          Students have access to state-of-the-art labs including Computer Labs, Mechanical Workshops, 
          Electronics Labs, and Robotics Centers. These labs provide exposure to real-time experiments, 
          automation projects, circuit designing, and prototype development. 
          <br /><br />
          Labs foster innovation, collaboration, and technical problem-solving, preparing students for 
          industry challenges and research opportunities.
        </p>
        <div className="course-labs">
          <img src={labImg} alt="B.Tech Labs" />
        </div>
      </section>

      {/* CAREER */}
      <section className="course-section">
        <h2>Career Opportunities</h2>
        <p>
          Graduates can pursue careers in software development, electronics, manufacturing, 
          robotics, consultancy, and research. Many students opt for higher studies like M.Tech or PhD. 
          Opportunities also exist in project management, startups, and innovation-driven enterprises.
          <br /><br />
          The program equips students with skills to excel in industry, academia, and global engineering challenges.
        </p>
      </section>

      {/* CONTACT SECTION — Mechanical-Style Card */}
      <div className="dept-card">
        <h2>Contact B.Tech Department</h2>
        <div className="contact-details">
          <p>📌 Block C — B.Tech Academic Building</p>
          <p>📞 +91 98765 43211</p>
          <p>📧 btech@edugo.ac.in</p>
        </div>
        <button className="contact-btn">Request More Info</button>
      </div>

    </div>
  );
};

export default Btech;
