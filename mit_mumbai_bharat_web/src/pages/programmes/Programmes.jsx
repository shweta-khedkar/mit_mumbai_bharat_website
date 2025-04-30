import React, { useEffect } from "react";
import "./programmes.css";
import { Link } from "react-router-dom";
import AOS from "aos";

import aiml from "../../assets/ai_ml.jpg";
import it from "../../assets/it.jpg";
import et from "../../assets/et.jpg";
import compscience from "../../assets/comp_science.jpg";

const Programmes = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="programmes-page">
      <div className="container programme-list">
        <h2 data-aos="fade-down">Our Undergraduate Programmes</h2>

        <div className="programme-cards">
          <div className="card" data-aos="fade-up">
            <img src={aiml} alt="CSE AI" />
            <div className="card-body">
              <h5 className="card-title">CSE (Artificial Intelligence)</h5>
              <p className="card-text">
                Learn cutting-edge AI, ML, and automation techniques.
              </p>
              <Link to="/programme/aiml" className="btn btn-explore">
                Explore More
              </Link>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <img src={compscience} alt="CSE DS" />
            <div className="card-body">
              <h5 className="card-title">CSE (Data Science)</h5>
              <p className="card-text">
                Master big data analytics and predictive modeling.
              </p>
              <Link to="/programme/cseds" className="btn btn-explore">
                Explore More
              </Link>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <img src={et} alt="Electronics Engineering" />
            <div className="card-body">
              <h5 className="card-title">Electronics Engineering</h5>
              <p className="card-text">
                Design the future with embedded systems and IoT.
              </p>
              <Link to="/programme/et" className="btn btn-explore">
                Explore More
              </Link>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <img src={it} alt="Information Technology" />
            <div className="card-body">
              <h5 className="card-title">Information Technology</h5>
              <p className="card-text">
                Develop full-stack applications and cloud solutions.
              </p>
              <Link to="/programme/it" className="btn btn-explore">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
