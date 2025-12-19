import React, { useState, useEffect } from "react";
import "./Header.css";

// Background slider images
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

// Hero card icons
import gradIcon from "../assets/grad.jpg";
import lifeIcon from "../assets/life.jpg";
import bookIcon from "../assets/book.jpg";

const Header = () => {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <header className="hero-section">

      {/* Background Slider */}
      <div className="hero-slider">
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`hero-slide ${index === current ? "active" : ""}`}
            alt={`Slide ${index + 1}`}
          />
        ))}

        {/* Arrows */}
        <button className="hero-arrow left" onClick={prevSlide}>‹</button>
        <button className="hero-arrow right" onClick={nextSlide}>›</button>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <span className="hero-small-title">EDUGO UNIVERSITY</span>
        <h1 className="hero-big-title">
          Together We'll <br /> Explore New Things
        </h1>
        <p className="hero-text">
          We believe everyone should have the opportunity
          to create progress through technology.
        </p>

        {/* Find Courses Button */}
        <button className="hero-btn">Find Courses</button>
      </div>

      {/* Floating Cards */}
      <div className="hero-overlay-cards">
        <div className="hero-overlay-card">
          <div className="icon-wrap">
            <img src={gradIcon} alt="Graduation" />
          </div>
          <h3>Graduation</h3>
          <p>Eucal University was established & recognized.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="hero-overlay-card">
          <div className="icon-wrap">
            <img src={lifeIcon} alt="University Life" />
          </div>
          <h3>University Life</h3>
          <p>Experience the best campus lifestyle.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="hero-overlay-card">
          <div className="icon-wrap">
            <img src={bookIcon} alt="Education Services" />
          </div>
          <h3>Education Services</h3>
          <p>High-quality modern academic programs.</p>
          <a href="#">Learn More →</a>
        </div>
      </div>

    </header>
  );
};

export default Header;
