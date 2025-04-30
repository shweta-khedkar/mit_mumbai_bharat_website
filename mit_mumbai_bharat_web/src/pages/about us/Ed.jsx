import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import directorImg from "../../assets/ed.jpeg"; // Make sure this image exists
import "./ed.css";

const Ed = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="executive-director-page">
      {/* Heading Section */}
      <section
        className="text-center py-5 hero-bg text-white"
        data-aos="fade-down"
      >
        <div className="container">
          <h1 className="display-5 fw-bold">Executive Director’s Message</h1>
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
              src={directorImg}
              alt="Executive Director"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <h2 className="mb-3 text-primary">Mrs.Jyoti Karad Dhakne</h2>
            <h5 className="text-secondary mb-4">
              Executive Director - MIT-MUMBAI
            </h5>
            <p className="justified-text">
              India as a nation is on the Fastrack to becoming a global
              superpower. This dream shared by a billion people is only feasible
              due to the recent surge in excellent educational institutes
              throughout the country. Institutes like MAEERs [MIT] which made it
              possible to train a workforce of competent engineers, doctors,
              managers and more to help the nation grow and find its place on
              the international stage.
            </p>
            <p className="justified-text">
              But now we need to take this excellence in education to the
              children of our nation, so that they may drive India ahead and
              ensure her success in the coming decades.This can only succeed if
              we inculcate the values of tradition with the requirements of
              today to create the citizens of tomorrow.
            </p>
            <p className="justified-text">
              MIT-MUMBAI is the answer to this dilemma that we, as a nation, are
              facing. Committed to quality education, but delivered with a mix
              of traditional and modern approaches to pedagogy so as to maximise
              the mental, physical and spiritual growth of the individual.
            </p>
            <p className="justified-text">
              At MIT, Mumbai your child is not merely a student, but is a member
              of our family and will be treated with the same care and affection
              with which we look after our own.
            </p>
            <p className="justified-text">
              Love and respect, honour and integrity, passion and determination
              will all be equally imbued to each of our loving students so that
              they may shine as bright as they can, and that we can be assured
              of a beautiful tomorrow for our country, our society and indeed
              our own families. This promise shall be upheld by me, by the
              principal and indeed by the entire staff.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ed;
