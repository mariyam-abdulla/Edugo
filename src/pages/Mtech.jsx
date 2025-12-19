import React from "react";
import "./Mtech.css";
import labImg from "../assets/mtech-lab.jpg";

const Mtech = () => {
  return (
    <div className="course-page">

      {/* NEW MODERN HEADER WITHOUT IMAGE */}
      <div className="course-header-new">
        <h1>🎓 Master of Technology (M.Tech)</h1>
        <p>
          A 2-year advanced postgraduate program focused on research, innovation, and specialized engineering knowledge.
        </p>
      </div>

      {/* ABOUT SECTION */}
      <section className="course-section">
        <h2>About M.Tech</h2>
        <p>
          EduGo's M.Tech program offers a research-driven curriculum that enhances technical and analytical skills. 
          Students work on real-world projects, publish research papers, and collaborate with industry experts. 
          <br /><br />
          The program emphasizes advanced concepts in engineering, hands-on experiments, simulations, and lab work. 
          Students gain expertise in problem-solving, critical thinking, and designing innovative solutions. 
          <br /><br />
          Graduates are prepared to excel in research, academia, and industry, and can pursue careers in specialized domains or continue to a PhD.
        </p>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="course-section">
        <h2>Specializations Offered</h2>
        <ul>
          <li>M.Tech in Computer Science Engineering</li>
          <li>M.Tech in Mechanical Engineering</li>
          <li>M.Tech in Electrical Engineering</li>
          <li>M.Tech in Artificial Intelligence</li>
          <li>M.Tech in Data Science</li>
          <li>M.Tech in VLSI Design</li>
        </ul>
      </section>

      {/* LABS */}
      <section className="course-section">
        <h2>Research Labs & Facilities</h2>
        <p>
          Students have access to high-end research centers for advanced learning and experimentation. 
          Labs are equipped with AI simulators, advanced computing systems, robotics platforms, IoT devices, and mechanical simulators. 
          <br /><br />
          These labs enable students to prototype, test, and validate solutions, preparing them for industry projects and innovative research.
        </p>
        <div className="course-labs">
          <img src={labImg} alt="M.Tech Labs" />
        </div>
      </section>

      {/* CAREER */}
      <section className="course-section">
        <h2>Career Opportunities</h2>
        <p>
          M.Tech graduates can become Researchers, Senior Engineers, Data Scientists, AI Engineers, University Professors, Technical Leads, 
          or pursue a PhD. Graduates are equipped to take leadership roles in R&D departments, technology-driven startups, and multinational corporations. 
          <br /><br />
          The program opens opportunities in cutting-edge fields such as AI, robotics, renewable energy, advanced computing, and embedded systems.
        </p>
      </section>

      {/* CONTACT SECTION — Mechanical-Style Card */}
      <div className="dept-card">
        <h2>Contact M.Tech Department</h2>
        <div className="contact-details">
          <p>📌 Block D — PG Studies & Research Building</p>
          <p>📞 +91 98765 43212</p>
          <p>📧 mtech@edugo.ac.in</p>
        </div>
        <button className="contact-btn">Request More Info</button>
      </div>

    </div>
  );
};

export default Mtech;
