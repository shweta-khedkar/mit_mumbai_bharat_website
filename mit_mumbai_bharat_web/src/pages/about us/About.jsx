import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import missionImg from "../../assets/et.jpg";
import visionImg from "../../assets/et.jpg";
import valuesImg from "../../assets/et.jpg";
import heroVideo from "../../assets/mit_video_landingpage.mp4";
import "./about_us.css";
import Counter from "./Counter";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay" data-aos="fade-up">
          <h1>About MAEER'S MIT Mumbai</h1>
          <p>
            Carrying forward the 40-year legacy of excellence in education...
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section container" data-aos="fade-up">
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
      <section className="mission-vision container" data-aos="zoom-in-up">
        <div className="row">
          <div className="col" data-aos="fade-right">
            <img src={missionImg} alt="Mission" />
            <h3>Our Mission</h3>
            <p>
              To empower students through outcome-based education and nurture
              competent professionals ready to face global challenges.
            </p>
          </div>
          <div className="col" data-aos="fade-left">
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
      <section className="text-center py-12 highlights" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10">MIT Legacy at a Glance</h2>
        <div className="highlights-grid">
          {/* Card 1 */}
          <div className="highlight-card card-1">
            <h3 className="text-4xl font-extrabold text-white mb-2">
              <Counter target={40} />+
            </h3>
            <p className="text-gray-100">Years of Academic Excellence</p>
          </div>

          {/* Card 2 */}
          <div className="highlight-card card-2">
            <h3 className="text-4xl font-extrabold text-white mb-2">
              <Counter target={100000} />+
            </h3>
            <p className="text-gray-100">Global Alumni Network</p>
          </div>

          {/* Card 3 */}
          <div className="highlight-card card-3">
            <h3 className="text-4xl font-extrabold text-white mb-2">
              <Counter target={15} />+
            </h3>
            <p className="text-gray-100">
              National & International Collaborations
            </p>
          </div>

          {/* Card 4 */}
          <div className="highlight-card card-4">
            <h3 className="text-4xl font-extrabold text-white mb-2">AICTE</h3>
            <p className="text-gray-100">Approved Programs</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us container" data-aos="fade-up">
        <h2>Why Choose MAEER's MIT Mumbai?</h2>
        <ul>
          <li>
            State-of-the-art campus with modern laboratories and workshops.
          </li>
          <li>Experienced faculty with global exposure.</li>
          <li>Industry-oriented curriculum & research opportunities.</li>
          <li>Vibrant student clubs and annual tech & cultural fests.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
