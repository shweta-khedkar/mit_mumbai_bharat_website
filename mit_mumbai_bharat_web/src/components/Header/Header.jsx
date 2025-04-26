import React, { useState } from 'react';
import logo from '../../assets/mit-wpu-logo.png';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={{ backgroundColor: '#000080' }}>
      <div className="container-fluid py-2">
        <div className="d-flex align-items-center justify-content-between">

          {/* Left: Logo (always visible) */}
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="College Logo"
              className="logo-custom"
              style={{ height: '120px', width: 'auto' }}
            />
          </div>

          {/* Center: Navigation (desktop only) */}
          <div className="flex-grow-1 mx-4 d-none d-md-block text-center">
            <nav>
              <ul className="nav justify-content-center mb-1">
                {['Home', 'About Us', 'Admissions', 'Programs', 'Student Corner'].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link fw-bold nav-link-custom" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <hr className="border-light my-1" />
              <ul className="nav justify-content-center mt-1">
                {['IT @ MIT', 'Placements', 'Faculty', 'Careers', 'Life @MIT Mumbai', 'News & Events'].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link fw-bold nav-link-custom" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: Hamburger (always for mobile) */}
          <div className="d-flex align-items-center">
            {/* Apply Now button (desktop only) */}
            <div className="d-none d-md-block">
              <a href="#" className="btn btn-warning fw-bold px-4 py-2 apply-now-button">
                Apply Now
              </a>
            </div>

            {/* Hamburger for small screens */}
            <button className="hamburger d-md-none ms-3" onClick={toggleMenu}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu (collapsible) */}
        {menuOpen && (
          <div className="mobile-menu mt-3 d-md-none text-center">
            <ul className="list-unstyled">
              {[
                'Home', 'About Us', 'Admissions', 'Programs', 'Student Corner',
                'IT @ MIT', 'Placements', 'Faculty', 'Careers', 'Life @MIT Mumbai', 'News & Events'
              ].map((item, index) => (
                <li key={index} className="my-2">
                  <a className="fw-bold text-white" href="#" onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <a href="#" className="btn btn-warning fw-bold px-4 py-2 apply-now-button">
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
