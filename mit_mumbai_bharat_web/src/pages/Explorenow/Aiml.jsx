import React from "react";

const Aiml = () => {
  return (
    <div className="explore-page">
      <div className="container text-center py-5">
        <h1 data-aos="fade-up">Welcome to the Explore Page 🚀</h1>
        <p className="lead mt-3" data-aos="fade-up" data-aos-delay="200">
          Here you can discover more about our programs, campus life, and
          opportunities.
        </p>
        <Link to="/" className="btn btn-primary mt-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Aiml;
