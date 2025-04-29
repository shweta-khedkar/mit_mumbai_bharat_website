import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import founderImg from "../../assets/founder.jpg";
import "./founder.css";

const Founder = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="founder-page">
      {/* Title Section */}
      <section
        className="text-center py-5 hero-gradient text-white"
        data-aos="fade-up"
      >
        <div className="container">
          <h1 className="display-5 mb-3">Founder’s Message</h1>
          <p className="lead">
            "The pathway to higher education is a journey that takes learning
            beyond classrooms, beyond degrees."
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="container py-5">
        <div
          className="row align-items-center shadow-lg rounded-4 p-4 bg-white g-4"
          data-aos="fade-up"
        >
          <div className="col-lg-6" data-aos="fade-right">
            <img
              src={founderImg}
              alt="Prof. Dr. Vishwanath Karad"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="mb-3 text-primary">Prof. Dr. Vishwanath D. Karad</h2>
            <h5 className="text-secondary mb-4">
              Founder & Chief Patron - MAEER's MIT Group of Institutions
            </h5>
            <p>
              At MIT, we groom generations who will be the architects of
              tomorrow, drivers of positive global change and ambassadors of
              world peace. Over the past 4 decades, students of MIT have
              created their footprints of excellence all over the world that
              inspire the spirit of transformation, change, and perseverance.
            </p>
            <p>
              Our walk is long, and the journey a continuous one, with students
              joining the caravan and marching ahead as they accomplish their
              goals and realize their dreams.
            </p>
            
          </div>
        </div>
      </section>

      {/* World Peace Dome Section */}
      <section
        className="py-5 peace-gradient text-white text-center"
        data-aos="zoom-in-up"
      >
        <div className="container">
          <h2 className="mb-4">Creator of the World Peace Dome</h2>
          <p className="lead mb-0">
            Conceptualised, designed, planned and created under the guidance and
            supervision of the visionary educationist and proponent of peace,
            Prof. Dr. Vishwanath Karad, this monument is dedicated to being a
            ‘Centre of Wisdom, Knowledge Dissemination and Social
            Transformation.’
          </p>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4 text-primary">A Visionary's Message</h2>
        <div className="ratio ratio-16x9 shadow rounded-3 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/mrkf1Nd4e7A"
            title="Prof. Dr. Vishwanath Karad's Vision"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Founder;
