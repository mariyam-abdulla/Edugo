import React from "react";
import "./Civil.css";

// Images
import surveyLab from "../assets/survey-lab.jpg";
import construction from "../assets/construction.jpg";
import structuralModel from "../assets/structural-model.jpg";

const Civil = () => {
  return (
    <div className="dept-container">

      {/* MODERN HEADER WITHOUT IMAGE */}
      <div className="dept-header-new">
        <div className="dept-header-content">
          <h1>🏗️ Civil Engineering Department</h1>
          <p>
            The Civil Engineering Department focuses on building and maintaining
            infrastructure including structures, transportation, geotechnics,
            water resources, and environmental projects. Students gain both
            technical and hands-on skills through modern labs and
            industry-oriented training.
          </p>
        </div>
      </div>

      {/* COURSES SECTION */}
      <div className="dept-section">
        <h2>Courses Offered</h2>
        <ul>
          <li>B.Tech in Civil Engineering</li>
          <li>M.Tech in Structural Engineering</li>
          <li>Diploma in Civil Engineering</li>
          <li>PhD in Civil Structures</li>
        </ul>
      </div>

      {/* LABS AND FACILITIES */}
      <div className="dept-section">
        <h2>Labs & Facilities</h2>
        <p>
          The department includes Structural Engineering Lab, Surveying Lab,
          Geotechnical Engineering Lab, Environmental Engineering Lab,
          Transportation Engineering Lab, and Fluid Mechanics Lab, providing
          students with strong practical exposure.
        </p>

        <div className="lab-gallery">
          <img src={surveyLab} alt="Survey Lab" />
          <img src={construction} alt="Construction" />
          <img src={structuralModel} alt="Structural Model" />
        </div>
      </div>

      {/* CAREER OPPORTUNITIES */}
      <div className="dept-section">
        <h2>Career Opportunities</h2>
        <p>
          Civil engineers work in construction firms, government departments,
          structural design companies, project management, water resources,
          transportation engineering, and consultancy services.
        </p>
      </div>

      {/* CONTACT SECTION */}
      <div className="dept-card">
        <h2>Contact Civil Engineering Department</h2>

        <div className="contact-details">
          <p>📌 Block B - Civil Engineering Building</p>
          <p>📞 +91 98765 55643</p>
          <p>📧 civildept@college.edu</p>
        </div>

        <button className="contact-btn">Request More Info</button>
      </div>

    </div>
  );
};

export default Civil;
