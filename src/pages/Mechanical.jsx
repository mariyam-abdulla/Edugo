import React, { useEffect, useRef } from "react";
import "./Mechanical.css";

// ---------- IMAGE IMPORTS ----------
import thermalLab from "../assets/thermal-lab.jpg";
import roboticsLab from "../assets/robotics-lab.jpg";
import workshop from "../assets/machine-workshop.jpg";

const Mechanical = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pageRef.current) pageRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="mech-page" ref={pageRef}>

      {/* =============== NEW MODERN HEADER (NO IMAGE) =============== */}
      <div className="mech-header">
        <h1>Mechanical Engineering</h1>
        <p>
          Explore innovation in machine design, thermal systems, robotics,
          manufacturing, and industrial automation. Learn through hands-on
          labs, real-world projects, and cutting-edge research.
        </p>
      </div>

      {/* =============== COURSES SECTION =============== */}
      <div className="mech-card">
        <h2>Courses Offered</h2>
        <ul>
          <li>B.Tech in Mechanical Engineering</li>
          <li>M.Tech in Thermal Engineering</li>
          <li>M.Tech in CAD/CAM</li>
          <li>Diploma in Mechanical Engineering</li>
          <li>PhD in Mechanical Systems</li>
        </ul>
      </div>

      {/* =============== LABS SECTION =============== */}
      <div className="mech-card">
        <h2>Laboratories & Facilities</h2>

        <div className="lab-gallery">
          <img src={thermalLab} alt="Thermal Lab" />
          <img src={roboticsLab} alt="Robotics Lab" />
          <img src={workshop} alt="Machine Workshop" />
        </div>

        <ul>
          <li>Advanced Robotics & Automation Lab</li>
          <li>Thermal & Heat Transfer Lab</li>
          <li>Workshop – Lathe, CNC Machines, Welding</li>
          <li>Automobile Engineering Lab</li>
          <li>3D Printing & Rapid Prototyping Lab</li>
        </ul>
      </div>

      {/* =============== FACULTY SECTION =============== */}
      <div className="mech-card">
        <h2>Top Faculty Members</h2>
        <ul>
          <li>Dr. R. Kumar – Head of Department (Thermal Sciences)</li>
          <li>Prof. Anusha Varma – Robotics & Automation</li>
          <li>Prof. S. Prakash – Manufacturing Technology</li>
          <li>Dr. Naveen Kumar – CAD/CAM Specialist</li>
        </ul>
      </div>

      {/* =============== ACHIEVEMENTS SECTION =============== */}
      <div className="mech-card">
        <h2>Department Achievements</h2>
        <ul>
          <li>Ranked Top 10 in State for Mechanical Engineering</li>
          <li>Students won National Robotics Competition 2024</li>
          <li>Over 90% placement record every year</li>
          <li>Published 50+ research papers in reputed journals</li>
        </ul>
      </div>

      {/* =============== CONTACT SECTION =============== */}
      <div className="mech-contact">
        <h2>Contact Mechanical Department</h2>

        <div className="contact-details">
          <p>📌 Block A - Mechanical Engineering Building</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 mechanical@edugo.ac.in</p>
        </div>

        <button className="contact-btn">Request More Info</button>
      </div>

    </div>
  );
};

export default Mechanical;
