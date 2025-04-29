import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import presidentImg from "../../assets/ep-sir.webp";
import "./ep.css";

const Ep = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="executive-president-page">
      {/* Heading Section */}
      <section
        className="text-center py-5 hero-bg text-white"
        data-aos="fade-down"
      >
        <div className="container">
          <h1 className="display-5 fw-bold">Executive President’s Message</h1>
          <p className="lead mt-3">
            “Education should go beyond academic excellence and create global
            citizens.”
          </p>
        </div>
      </section>

      {/* Message Content */}
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-5" data-aos="fade-right">
            <img
              src={presidentImg}
              alt="Executive President"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <h2 className="mb-3 text-primary">Dr. Rahul V. Karad</h2>
            <h5 className="text-secondary mb-4">
              Executive President - MIT-WPU & Managing Trustee - MAEER's MIT
            </h5>
            <p className="justified-text">
              At MIT-WPU, our unwavering commitment extends beyond academic
              excellence. Our educational philosophy nurtures leadership,
              character, and innovation while emphasizing humanitarian values.
              Education must create leaders who are morally grounded, socially
              responsible, and globally competent.
            </p>
            <p className="justified-text">
              Our students are prepared not just for jobs but for meaningful
              careers and service to society. With a future-driven curriculum
              and emphasis on peace studies, MIT-WPU is shaping the nation’s
              next generation of visionary leaders.
            </p>
            <p className="fw-bold text-success">
              “True education builds a harmonious, progressive, and just
              society.”
            </p>
          </div>
        </div>
      </section>

      {/* Visionary Section */}
      <section
        className="text-center py-5 gradient-section text-white"
        data-aos="zoom-in-up"
      >
        <div className="container">
          <h2 className="mb-4">A Visionary Leader</h2>
          <p className="lead mb-0">
            Rahul Karad is a passionate educationist and youth leader recognized
            for his vision of value-based education and youth empowerment.
            Through peace initiatives and leadership programs, he aims to shape
            global citizens who contribute towards national and international
            harmony.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4 text-primary">Watch His Vision</h2>
        <div className="ratio ratio-16x9 shadow rounded-3 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/sA0WUWDnFBU?si=qJzh3WV1NGfupDMy"
            title="Rahul Karad Message"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Ep;
