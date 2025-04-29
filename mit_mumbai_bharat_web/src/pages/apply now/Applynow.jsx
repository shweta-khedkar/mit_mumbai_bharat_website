import React from "react";
import "./applynow.css"; // Adjust the path if needed
import indexbg from "../../assets/indexbg.jpg";

const Applynow = () => {
  return (
    <>
      <div className="container">
        <div className="apply-card">
          {/* Left: Apply Form */}
          <div className="apply-form">
            <h2>Apply Now</h2>
            <p className="text-center">
              Fill out the form below to apply for our programs.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
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

              {/* New Field: Name of School */}
              <div className="mb-3">
                <label htmlFor="schoolName" className="form-label">
                  Name of School
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="schoolName"
                  name="schoolName"
                  required
                />
              </div>

              {/* New Field: 10th Grade Marks */}
              <div className="mb-3">
                <label htmlFor="tenthMarks" className="form-label">
                  10th Grade Marks
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tenthMarks"
                  name="tenthMarks"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
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
                <label htmlFor="program" className="form-label">
                  Select Program
                </label>
                <select
                  className="form-control"
                  id="program"
                  name="program"
                  required
                >
                  <option value="">-- Choose a Program --</option>
                  <option value="CSE AI">
                    Computer Science and Engineering (AI/ML)
                  </option>
                  <option value="CSE DS">
                    Computer Science and Engineering
                  </option>
                  <option value="Electronics">Electronics Engineering</option>
                  <option value="IT">Information Technology</option>
                </select>
              </div>

              {/* New Field: Category */}
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  className="form-control"
                  id="category"
                  name="category"
                  required
                >
                  <option value="">-- Choose Category --</option>
                  <option value="General">General</option>
                  <option value="ST/SC/OBC">ST/SC/OBC</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Additional Information (Optional)
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn-apply">
                Submit Application
              </button>
            </form>
          </div>

          {/* Right: Image Section */}
          <div className="apply-image">
            <img src={indexbg} alt="MIT" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Applynow;
