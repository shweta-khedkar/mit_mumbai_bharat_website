import React from "react";
import "./courses.css";
import aiml from "../../assets/ai_ml.jpg";
import it from "../../assets/it.jpg";
import et from "../../assets/et.jpg";
import compscience from "../../assets/comp_science.jpg";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="courses-page">
      {/* Header */}
      <div id="header-placeholder"></div>

      {/* Main Content */}
      <div className="container courses-list">
        <h2>Our Undergraduate Courses</h2>

        {/* Table Layout */}
        <div className="courses-table">
          {/* Row 1 */}
          <div className="courses-row right-image">
            <div className="courses-details">
              <h5 className="courses-title">
                Computer Science & Engineering (Artificial Intelligence /
                Machine Learning)
              </h5>
              <p className="courses-description">
                Learn cutting-edge AI, ML, and automation techniques.
              </p>
              <Link to="/programme/aiml" className="btn btn-explore">
                Explore More
              </Link>
            </div>
            <div className="courses-img">
              <img src={aiml} alt="CSE AI" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="courses-row left-image">
            <div className="courses-details">
              <h5 className="courses-title">Computer Science & Engineering</h5>
              <p className="courses-description">
                Master big data analytics and predictive modeling.
              </p>
              <Link to="/programme/cseds" className="btn btn-explore">
                Explore More
              </Link>
            </div>
            <div className="courses-img">
              <img src={compscience} alt="CSE DS" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="courses-row right-image">
            <div className="courses-details">
              <h5 className="courses-title">Electronics Engineering</h5>
              <p className="courses-description">
                Design the future with embedded systems and IoT.
              </p>
              <Link to="/programme/et" className="btn btn-explore">
                Explore More
              </Link>
            </div>
            <div className="courses-img">
              <img src={et} alt="Electronics Engineering" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="courses-row left-image">
            <div className="courses-details">
              <h5 className="courses-title">Information Technology</h5>
              <p className="courses-description">
                Develop full-stack applications and cloud solutions.
              </p>
              <Link to="/programme/it" className="btn btn-explore">
                Explore More
              </Link>
            </div>
            <div className="courses-img">
              <img src={it} alt="Information Technology" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer-placeholder"></div>
    </div>
  );
};

export default Courses;
