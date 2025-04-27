import React, { useRef } from "react";
import "./home.css";
import CampusTour from "../../assets/mit_video_landingpage.mp4";
import emailjs from "emailjs-com";
import Programmes from "../programmes/Programmes.jsx";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f9m3lwq", // 🔁 Replace with your EmailJS Service ID
        "template_x7725jm", // 🔁 Replace with your EmailJS Template ID
        form.current,
        "tTYTcXGIhVuzVeOkp" // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Enquiry submitted successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Something went wrong. Please try again.");
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="home-page">
        {/* Background and overlay */}
        <div className="background-image"></div>
        <div className="overlay"></div>

        {/* Main content */}
        <main className="welcome-section">
          <div className="container">
            <div className="row align-items-start">
              {/* Left Side - Welcome Text */}
              <div className="col-md-6 mb-4 mb-md-0 welcome-text">
                <h2 className="mb-3 text-white ">
                  Welcome to MAEER'S MIT MUMBAI
                </h2>
                <p className="text-white">
                  With over 40 years of academic excellence and a global alumni
                  network exceeding 100,000, MIT is a premier engineering
                  institute approved by AICTE and affiliated with top Indian
                  universities. Known for its commitment to innovation and
                  quality education, MIT empowers students to meet global
                  challenges through cutting-edge learning experiences.
                </p>
                <p className="text-white">
                  Extending the legacy of MIT Pune, we are proud to launch our
                  new Engineering College in the Mumbai Metropolitan Region from
                  the academic year 2025–2026. Set in a nature-inspired campus,
                  the institute offers advanced infrastructure, expert faculty,
                  and a dynamic learning environment that promotes holistic
                  development.
                </p>
                <p className="text-white">
                  At MIT Mumbai, education is more than a degree—it's a
                  transformative journey toward professional and personal
                  excellence.
                </p>
              </div>

              {/* Right Side - Enquiry Form */}
              <div className="col-md-6 d-flex justify-content-end">
                <div className="enquiry-wrapper">
                  <div className="card1 shadow p-4">
                    <h4 className="mb-3 text-white">Enquiry Form</h4>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label text-white">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="email"
                          className="form-label text-white"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="phone"
                          className="form-label text-white"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="course"
                          className="form-label text-white"
                        >
                          Interested Course
                        </label>
                        <select
                          className="form-select"
                          id="course"
                          name="course"
                          required
                        >
                          <option value="">Select a course</option>
                          <option value="Computer Science and Engineering - AI & ML">
                            Computer Science and Engineering - AI & ML
                          </option>
                          <option value="Computer Science Engineering">
                            Computer Science Engineering
                          </option>
                          <option value="Information Technology">
                            Information Technology
                          </option>
                          <option value="Electronics Engineering">
                            Electronics Engineering
                          </option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="message"
                          className="form-label text-white"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="3"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn submit-btn w-100 mt-3"
                      >
                        Submit Enquiry
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <section className="video-section">
        <div className="container">
          <h3 className="text-center mb-5">Discover Our Campus</h3>
          <div className="video-wrapper">
            <video controls autoPlay loop muted playsInline>
              <source src={CampusTour} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <Programmes />
      {/* Location Card */}
      <section className="location-card">
        <div className="container">
          <div className="row">
            <div className="col-md-6 map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6 address-container">
              <h4 className="text-white">Contact Us</h4>
              <p className="text-white">
                Address: MAEER’s Maharashtra Institute of Technology, Near Green
                Valley Studio, Mira Road, Mumbai, Maharashtra, 401107.
              </p>
              <p className="text-white">
                Phone: +91 70666 70405 | +91 92265 63228
              </p>
              <p className="text-white">
                Email:{" "}
                <a href="mailto:admissions@mitmumbai.com">
                  admissions@mitmumbai.com
                </a>
              </p>
              <p className="text-white">
                Website:{" "}
                <a
                  href="http://www.mitmumbai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mitmumbai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
