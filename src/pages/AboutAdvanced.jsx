import React from "react";
import "./AboutAdvanced.css";

import img1 from "../assets/students-main.jpg";
import img2 from "../assets/student-reading.jpg";
import img3 from "../assets/campus.jpg";

const AboutAdvanced = () => {
  return (
    <div className="adv-about-container">

      {/* TOP SECTION */}
      <div className="adv-about-wrapper">

        {/* LEFT IMAGE STAGGERED LAYOUT */}
        <div className="adv-staggered-images">
          <div className="top-images">
            <img src={img1} alt="Campus" />
            <img src={img2} alt="Students" />
          </div>
          <div className="bottom-image">
            <img src={img3} alt="Library" />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="adv-about-content">
          <p className="tag">About EduGo</p>
          <h2 className="title">Degrees in Various Academic Disciplines</h2>

          <p className="desc">
            Not only can university offer an environment rich in
            social and cultural experiences.
          </p>

          <ul className="check-list">
            <li>✔ Access to all our courses</li>
            <li>✔ Learn the latest skills</li>
            <li>✔ Upskill your organization</li>
          </ul>

          <button className="read-btn">Read More</button>
        </div>

      </div>

      {/* BOTTOM STATS */}
      <div className="adv-stats">
        <div className="stat-box">
          <h2>3+</h2>
          <p>Years of Language Education Experience</p>
        </div>

        <div className="stat-box">
          <h2>99+</h2>
          <p>Innovative Foreign Online Courses</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Qualified Teachers & Language Experts</p>
        </div>

        <div className="stat-box">
          <h2>11+</h2>
          <p>Learners Enrolled in EduGo Courses</p>
        </div>
      </div>

    </div>
  );
};

export default AboutAdvanced;
