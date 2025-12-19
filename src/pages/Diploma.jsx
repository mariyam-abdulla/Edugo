import React from "react";
import "./Diploma.css";
import workshopImg from "../assets/diploma-workshop.jpg";

const Diploma = () => {
  return (
    <div className="course-page">

      {/* ----------- MODERN HEADER ----------- */}
      <div className="course-header-new">
        <h1>🎓 Diploma in Engineering</h1>
        <p>
          A 3-year program providing foundational engineering knowledge, practical skills, and industry readiness.
        </p>
      </div>

      {/* ----------- ABOUT SECTION ----------- */}
      <section className="course-section">
        <h2>About the Diploma Program</h2>
        <p>
          The Diploma program at EduGo equips students with essential technical knowledge and hands-on skills.
          Students explore engineering basics, workshop practices, and applied technology suitable for industrial jobs or further studies.
          <br /><br />
          The program emphasizes practical training, project work, and real-world applications. Students gain confidence to handle machinery, software tools, and industry-standard equipment.
        </p>
      </section>

      {/* ----------- SPECIALIZATIONS ----------- */}
      <section className="course-section">
        <h2>Specializations</h2>
        <ul>
          <li>Mechanical Engineering</li>
          <li>Civil Engineering</li>
          <li>Electrical Engineering</li>
          <li>Computer Science & IT</li>
          <li>Electronics & Communication</li>
        </ul>
      </section>

      {/* ----------- WORKSHOPS & LABS ----------- */}
      <section className="course-section">
        <h2>Workshops & Labs</h2>
        <p>
          Diploma students have access to industry-standard workshops and labs for practical learning.
          They gain hands-on experience in mechanical, electrical, civil, and computer labs.
        </p>
        <div className="course-labs">
          <img src={workshopImg} alt="Diploma Workshop" />
        </div>
        <ul>
          <li>Mechanical Workshop – Lathe, CNC, Fabrication</li>
          <li>Electrical Lab – Circuits, Motors, Automation</li>
          <li>Civil Lab – Material Testing, Surveying</li>
          <li>Computer Lab – Programming, Software Tools</li>
        </ul>
      </section>

      {/* ----------- CAREER PATHS ----------- */}
      <section className="course-section">
        <h2>Career Opportunities</h2>
        <p>
          Graduates can pursue careers as Junior Engineers, Technicians, Field Supervisors, or enter entrepreneurship.
          Further studies like B.Tech or certifications open opportunities in research, IT, and manufacturing.
        </p>
      </section>

      {/* ----------- INTERNSHIPS & INDUSTRY TRAINING ----------- */}
      <section className="course-section">
        <h2>Internships & Industry Training</h2>
        <p>
          Students undergo practical training in industries, gaining exposure to real-world engineering practices.
          EduGo partners with companies for summer internships, project-based learning, and live industrial projects.
        </p>
      </section>

      {/* ----------- CONTACT SECTION (Civil-style Card) ----------- */}
      <div className="dept-card">
        <h2>Contact Diploma Coordinator</h2>
        <div className="contact-details">
          <p>📌 Prof. Sunita Verma</p>
          <p>📧 diploma@edugo.ac.in</p>
          <p>📞 +91 98765 43220</p>
          <p>🏢 Block B – Room 210, EduGo Campus</p>
        </div>
        <button className="contact-btn">Request More Info</button>
      </div>

    </div>
  );
};

export default Diploma;
