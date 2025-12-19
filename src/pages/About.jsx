import React, { useEffect } from "react";
import "./About.css";

// Import images from assets folder
import mainImg from "../assets/class1.jpg";
import gradImg from "../assets/graduation.jpg";
import class2Img from "../assets/class2.jpg";

function About() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="about-section about-fade-in">

      {/* LEFT IMAGE GRID */}
      <div className="about-left">
        <div className="about-main-img">
          <img src={mainImg} alt="Students" />
        </div>
        <div className="about-small-imgs">
          <img src={gradImg} alt="Graduation" />
          <img src={class2Img} alt="Classroom" />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="about-right">
        <span className="about-subtitle">Welcome to EduGo</span>
        <h2 className="about-title">Creating Industry-Ready Graduates</h2>
        <p className="about-desc">
          Prepare for success with our industry-focused programs designed to produce
          graduates ready to excel in today’s competitive job market.
        </p>

        <ul className="about-list">
          <li>35k+ Students Enrolled</li>
          <li>20 Years of Quality Academics</li>
          <li>16 Accreditations & Awards</li>
        </ul>

        <button className="about-btn">Learn More</button>
      </div>

    </div>
  );
}

export default About;
