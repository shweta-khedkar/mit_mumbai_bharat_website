import React from "react";
import missionImg from "../../assets/et.jpg";
import visionImg from "../../assets/et.jpg";
import valuesImg from "../../assets/et.jpg";
import heroVideo from "../../assets/mit_video_landingpage.mp4";
import { FaChevronDown } from "react-icons/fa";
import "./about_us.css";
const About = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("about-content");
    contentSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1>About MAEER'S MIT Mumbai</h1>
          <p>
            Carrying forward the 40-year legacy of excellence in education...
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section container">
        <h2>Who We Are</h2>
        <p>
          MAEER’s MIT Mumbai is a new-age engineering institute rooted in the
          legacy of MAEER’s MIT Pune — a pioneer in private education since
          1983. Affiliated to top universities and AICTE-approved, our campus
          offers futuristic infrastructure and a curriculum designed to foster
          innovation, leadership, and holistic development.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision container">
        <div className="row">
          <div className="col">
            <img src={missionImg} alt="Mission" />
            <h3>Our Mission</h3>
            <p>
              To empower students through outcome-based education and nurture
              competent professionals ready to face global challenges.
            </p>
          </div>
          <div className="col">
            <img src={visionImg} alt="Vision" />
            <h3>Our Vision</h3>
            <p>
              To emerge as a world-class institution in technical education,
              research, and innovation for the holistic development of students.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section container">
        <h2>MIT Legacy at a Glance</h2>
        <div className="highlights">
          <div>
            <h3>40+</h3>
            <p>Years of Academic Excellence</p>
          </div>
          <div>
            <h3>100,000+</h3>
            <p>Global Alumni Network</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>National & International Collaborations</p>
          </div>
          <div>
            <h3>AICTE</h3>
            <p>Approved Programs</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section container">
        <h2>Our Core Values</h2>
        <div className="row">
          <div className="col">
            <img src={valuesImg} alt="Values" />
            <p>
              At MAEER’s MIT Mumbai, we uphold values of academic integrity,
              inclusivity, research-driven learning, and community service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
