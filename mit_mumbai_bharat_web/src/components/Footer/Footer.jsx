import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,FaXTwitter  } from "react-icons/fa6";
import './footer.css'; // Import custom CSS
import broucher from '../../assets/broucher.pdf'
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000080' }} className="py-5 mt-auto">
    <div className="container">
      <div className="row">
        {/* Sitemap */}
        <div className="col-md-4 mb-4 mb-md-0">
       
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#programs" className="footer-link">Programs</a></li>
                <li><a href="#it" className="footer-link">IT @MIT</a></li>
                <li><a href="#placements" className="footer-link">Placements</a></li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li><a href="#faculty" className="footer-link">Faculty</a></li>
                <li><a href="#careers" className="footer-link">Careers</a></li>
                <li><a href="#life" className="footer-link">Life @MIT Mumbai</a></li>
                <li><a href="#news" className="footer-link">News and Events</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="col-md-4 mb-4 mb-md-0">
          <h5 className="text-white">Follow Us</h5>
          <div className="d-flex gap-3">
            <a href="https://www.facebook.com/share/18vkLkHMVZ/" target="_blank" rel="noopener noreferrer" className="footer-link fs-4">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link fs-4">
              <FaXTwitter  />
            </a>
            <a href="https://www.instagram.com/mitengineeringofficial?igsh=MTZkamo3ajNub3V2bg==" target="_blank" rel="noopener noreferrer" className="footer-link fs-4">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link fs-4">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Brochure Button */}
        <div className="col-md-4 d-flex flex-column align-items-md-end">
          
          <a href={broucher} download className="btn btn-light btn-download">
            Download Brochure
          </a>
        </div>
      </div>

      <hr className="border-light my-4" />

      {/* Copyright */}
      <div className="text-center text-white">
        <p className="mb-0">&copy; 2025 MIT MUMBAI, BHARAT. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
