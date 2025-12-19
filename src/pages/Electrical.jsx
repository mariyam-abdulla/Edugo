import React from "react";
import "./Electrical.css";

// Images for inner sections
import eeLab from "../assets/ee-lab.jpg";
import eeFaculty from "../assets/ee-faculty.jpg";

const Electrical = () => {
  return (
    <div className="ee-page">

      {/* NEW MODERN HEADER WITHOUT IMAGE */}
      <div className="ee-header-new">
        <h1>⚡ Electrical Engineering</h1>
        <p>Empowering the future with innovation, energy & electronics.</p>
      </div>

      {/* ABOUT SECTION */}
      <section className="ee-section">
        <h2>About the Department</h2>
        <p>
          The Electrical Engineering Department at EduGo focuses on power systems,
          renewable energy, automation, electronics, embedded systems, and electrical machinery.
          <br /><br />
          Our mission is to build technically strong engineers capable of working on real-life
          industry challenges through practical learning, research, and innovation.
          <br /><br />
          We provide students with exposure to modern software tools, lab experiments, 
          and industry-standard hardware, helping them excel in competitive exams and
          technical projects.
          <br /><br />
          The department actively encourages student participation in research, technical
          competitions, workshops, and industrial internships to bridge theory with practice.
        </p>
      </section>

      {/* COURSES */}
      <section className="ee-section">
        <h2>Courses Offered</h2>
        <ul className="ee-list">
          <li>B.Tech in Electrical Engineering</li>
          <li>M.Tech in Power Systems</li>
          <li>Diploma in Electrical Engineering</li>
          <li>PhD in Electrical Sciences</li>
        </ul>
      </section>

      {/* FACILITIES */}
      <section className="ee-section">
        <h2>Department Facilities</h2>
        <ul className="ee-list">
          <li>Advanced Power Systems Lab</li>
          <li>Renewable Energy Lab (Solar & Wind)</li>
          <li>High Voltage Testing Laboratory</li>
          <li>Embedded Systems & IoT Lab</li>
          <li>Electronics Circuit Designing Lab</li>
          <li>Smart Automation & Robotics Lab</li>
          <li>Computer-Aided Simulation Lab</li>
          <li>Digital Control Systems Lab</li>
          <li>Microgrid & Smart Grid Research Lab</li>
        </ul>
      </section>

      {/* LAB SECTION */}
      <section className="ee-lab">
        <img src={eeLab} alt="Electrical Lab" />
        <div className="lab-content">
          <h2>Modern Electrical Labs</h2>
          <p>
            Our laboratories are equipped with the latest testing equipment, renewable
            energy simulators, power analyzers, and embedded controllers.
            Students gain hands-on experience through real-time experiments, automation projects,
            and renewable energy research.
            <br /><br />
            Each lab session emphasizes practical problem-solving, design thinking,
            and safety protocols. Students also undertake mini-projects in embedded systems,
            power electronics, and sustainable energy solutions.
            <br /><br />
            These labs foster innovation, teamwork, and technical expertise, preparing
            students for both industry and research careers.
          </p>
        </div>
      </section>

      {/* FACULTY SECTION */}
      <section className="ee-faculty">
        <img src={eeFaculty} alt="Electrical Faculty" />
        <div className="faculty-content">
          <h2>Expert Faculty</h2>
          <p>
            The department has experienced professors, researchers, and specialists in
            power electronics, signal processing, renewable technologies, and embedded systems.
            Faculty members guide students in research, internships, and advanced engineering projects.
            <br /><br />
            Regular workshops, seminars, and mentorship programs are conducted to enhance
            students' technical, analytical, and soft skills.
            <br /><br />
            The faculty actively collaborates with industries and research institutions,
            giving students exposure to cutting-edge technology and innovation.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <div className="dept-card">
        <h2>Contact Electrical Department</h2>
        <div className="contact-details">
          <p>📌 Block D — Electrical Engineering Building</p>
          <p>📞 +91 91234 56789</p>
          <p>📧 ee@edugo.ac.in</p>
        </div>
        <button className="contact-btn">Request More Info</button>
      </div>

    </div>
  );
};

export default Electrical;
