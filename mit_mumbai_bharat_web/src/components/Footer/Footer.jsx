import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./footer.css";
import broucher from "../../assets/broucher.pdf";

const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer style={{ backgroundColor: "#000080" }} className="py-5 mt-auto">
      <div className="container">
        <div className="row">
          {/* Sitemap */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>
                    <a href="#home" className="footer-link">
                      Home
                    </a>
                  </li>
                  <li className="footer-dropdown-wrapper" ref={dropdownRef}>
                    <span
                      className="footer-link"
                      style={{ cursor: "pointer" }}
                      onClick={() => setAboutOpen(!aboutOpen)}
                    >
                      About Us {aboutOpen ? "▲" : "▼"}
                    </span>
                    {aboutOpen && (
                      <ul className="footer-dropdown-menu">
                        {[
                          "About MIT",
                          "History & Legacy",
                          "Founder",
                          "Executive President",
                          "Executive Director",
                          "Leadership and Governance",
                          "Ranking & Accreditation",
                          "Social Initiatives",
                          "National Ragging Prevention Programme",
                          "Administrative Offices",
                        ].map((item, index) => (
                          <li key={index}>
                            <a href="#" className="footer-link">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  <li>
                    <a href="#programs" className="footer-link">
                      Programs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>
                    <a href="#faculty" className="footer-link">
                      Faculty
                    </a>
                  </li>
                  <li>
                    <a href="#careers" className="footer-link">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#life" className="footer-link">
                      Life @MIT Mumbai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4 mb-md-0 ">
            <h5 className="text-white">Follow Us</h5>
            <div className="d-flex gap-3 ">
              <a
                href="https://www.facebook.com/share/18vkLkHMVZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link fs-4 hover-effect"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link fs-4 hover-effect"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/mitengineeringofficial?igsh=MTZkamo3ajNub3V2bg=="
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link fs-4 hover-effect"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/mit-engineering-mumbai/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link fs-4 hover-effect"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Brochure Download */}
          <div className="col-md-4 d-flex flex-column align-items-md-end">
            <a href={broucher} download className="btn btn-light btn-download">
              Download Brochure
            </a>
          </div>
        </div>

        <hr className="border-light my-4" />

        {/* Copyright */}
        <div className="text-center text-white">
          <p className="mb-0">
            &copy; 2025 MIT MUMBAI, BHARAT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
