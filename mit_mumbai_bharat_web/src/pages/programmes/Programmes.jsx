import React, { useEffect } from 'react';
import './programmes.css';
import aiml from "../../assets/ai_ml.jpg";
import it from "../../assets/it.jpg";
import et from "../../assets/et.jpg";
import compscience from "../../assets/comp_science.jpg";

const Programmes = () => {

  useEffect(() => {
    // Load Header
    fetch('../../Includes/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });

    // Load Footer
    fetch('../../Includes/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });
  }, []);

  return (
    <div className="programmes-page">

      {/* Header */}
      <div id="header-placeholder"></div>

      {/* Main Content */}
      <div className="container programme-list">
        <h2>Our Undergraduate Programmes</h2>

        {/* Cards Wrapper */}
        <div className="programme-cards">

          {/* Programme 1 */}
          <div className="card">
            <img src={aiml} alt="CSE AI" />
            <div className="card-body">
              <h5 className="card-title">Computer Science & Engineering (Artificial Intelligence)</h5>
              <p className="card-text">Learn cutting-edge AI, ML, and automation techniques.</p>
              <a href="#" className="btn btn-explore">Explore More</a>
            </div>
          </div>

          {/* Programme 2 */}
          <div className="card">
            <img src={compscience} alt="CSE DS" />
            <div className="card-body">
              <h5 className="card-title">Computer Science & Engineering (Data Science)</h5>
              <p className="card-text">Master big data analytics and predictive modeling.</p>
              <a href="#" className="btn btn-explore">Explore More</a>
            </div>
          </div>

          {/* Programme 3 */}
          <div className="card">
            <img src={et} alt="Electronics Engineering" />
            <div className="card-body">
              <h5 className="card-title">Electronics Engineering</h5>
              <p className="card-text">Design the future with embedded systems and IoT.</p>
              <a href="#" className="btn btn-explore">Explore More</a>
            </div>
          </div>

          {/* Programme 4 */}
          <div className="card">
            <img src={it} alt="Information Technology" />
            <div className="card-body">
              <h5 className="card-title">Information Technology</h5>
              <p className="card-text">Develop full-stack applications and cloud solutions.</p>
              <a href="#" className="btn btn-explore">Explore More</a>
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
