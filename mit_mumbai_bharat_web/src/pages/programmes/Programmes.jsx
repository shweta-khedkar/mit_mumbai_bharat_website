import React from 'react';
import './programmes.css';
import aiml from "../../assets/ai_ml.jpg";
import it from "../../assets/it.jpg";
import et from "../../assets/et.jpg";
import compscience from "../../assets/comp_science.jpg";

const Programmes = () => {
  return (
    <div className="programmes-page">

      {/* Header */}
      <div id="header-placeholder"></div>

      {/* Main Content */}
      <div className="container programme-list">
        <h2>Our Undergraduate Programmes</h2>

        {/* Table Layout */}
        <div className="programme-table">

          {/* Row 1 */}
          <div className="programme-row right-image">
            <div className="programme-details">
              <h5 className="programme-title">Computer Science & Engineering (Artificial Intelligence)</h5>
              <p className="programme-description">Learn cutting-edge AI, ML, and automation techniques.</p>
              <a href="#" className="btn btn-explore">Explore More</a>
            </div>
            <div className="programme-img">
              <img src={aiml} alt="CSE AI" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="programme-row left-image">
            <div className="programme-details">
              <h5 className="programme-title">Computer Science & Engineering (Data Science)</h5>
              <p className="programme-description">Master big data analytics and predictive modeling.</p>
              <a href="#" className="btn btn-explore">Explore More</a>
            </div>
            <div className="programme-img">
              <img src={compscience} alt="CSE DS" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="programme-row right-image">
            <div className="programme-details">
              <h5 className="programme-title">Electronics Engineering</h5>
              <p className="programme-description">Design the future with embedded systems and IoT.</p>
              <a href="#" className="btn btn-explore">Explore More</a>
            </div>
            <div className="programme-img">
              <img src={et} alt="Electronics Engineering" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="programme-row left-image">
            <div className="programme-details">
              <h5 className="programme-title">Information Technology</h5>
              <p className="programme-description">Develop full-stack applications and cloud solutions.</p>
              <a href="#" className="btn btn-explore">Explore More</a>
            </div>
            <div className="programme-img">
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

export default Programmes;
