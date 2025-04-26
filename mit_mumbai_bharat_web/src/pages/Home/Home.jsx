import React from 'react';
import './home.css';
import CampusTour from '../../assets/mit_video_landingpage.mp4';
const Home = () => {
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
              <h2 className="mb-3 text-white ">Welcome to MAEER'S MIT MUMBAI</h2>
              <p className="text-white">
                With over 40 years of academic excellence and a global alumni network exceeding 100,000, MIT is a premier engineering institute approved by AICTE and affiliated with top Indian universities.
              </p>
              <p className="text-white">
                Extending the legacy of MIT Pune, we are proud to launch our new Engineering College in the Mumbai Metropolitan Region from the academic year 2025–2026.
              </p>
              <p className="text-white">
                At MIT Mumbai, education is more than a degree—it’s a transformative journey toward professional and personal excellence.
              </p>
            </div>

            {/* Right Side - Enquiry Form */}
            <div className="col-md-6 d-flex justify-content-end">
              <div className="enquiry-wrapper">
                <div className="card shadow p-4">
                  <h4 className="mb-3 text-white">Enquiry Form</h4>
                  <form action="mail.php" method="POST">
                    
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label text-white1">Full Name</label>
                      <input type="text" className="form-control" id="name" name="name" required />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label text-white1">Email Address</label>
                      <input type="email" className="form-control" id="email" name="email" required />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label text-white1">Mobile Number</label>
                      <input type="tel" className="form-control" id="phone" name="phone" required />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="course" className="form-label text-white1">Interested Course</label>
                      <select className="form-select" id="course" name="course" required>
                        <option value="">Select a course</option>
                        <option value="Computer Science and Engineering - AI & ML">Computer Science and Engineering - AI & ML</option>
                        <option value="Computer Science Engineering">Computer Science Engineering</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Electronics Engineering">Electronics Engineering</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label text-white1">Message</label>
                      <textarea className="form-control" id="message" name="message" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn submit-btn w-100 mt-3">Submit Enquiry</button>
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
    </div>
  )
}

  export default Home;