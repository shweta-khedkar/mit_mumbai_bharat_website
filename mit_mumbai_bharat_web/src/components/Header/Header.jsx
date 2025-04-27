import React, { useState } from 'react';
import logo from '../../assets/mit-wpu-logo.png';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // for mobile submenu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  };

  return (
    <header style={{ backgroundColor: '#000080' }}>
      <div className="container-fluid py-2">
        <div className="d-flex align-items-center justify-content-between">

          {/* Left: Logo */}
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
                <li className="nav-item">
                  <a className="nav-link fw-bold nav-link-custom" href="#">Home</a>
                </li>

                {/* About Us with Dropdown */}
                
                <li className="nav-item dropdown-custom">
                  <a className="nav-link fw-bold nav-link-custom" href="#">About Us</a>
                  
                  <ul className="dropdown-menu-custom">
                    {['About MIT',
'History & Legacy',
'Founder',
'Executive President',
'Executive Director',
'Leadership and Governance',
'Ranking & Accreditation',
'Social Initiatives',
'National Ragging Prevention Programme',
'Administrative Offices'].map((item,index)=>(
<li key={index}><a href="#">{item}</a></li>
                   
))}
                    
                  </ul>
                </li>

                {['Admissions', 'Programs','Faculty', 'Careers', 'Life @MIT Mumbai', 'News & Events'].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link fw-bold nav-link-custom" href="#">{item}</a>
                  </li>
                ))}
              </ul>
              {/* <hr className="border-light my-1" />
              <ul className="nav justify-content-center mt-1">
                {[ 'Faculty', 'Careers', 'Life @MIT Mumbai', 'News & Events'].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link fw-bold nav-link-custom" href="#">{item}</a>
                  </li>
                ))}
              </ul> */}
            </nav>
          </div>

          {/* Right: Hamburger */}
          <div className="d-flex align-items-center">
            <div className="d-none d-md-block">
              <a href="#" className="btn btn-warning fw-bold px-4 py-2 apply-now-button">
                Apply Now
              </a>
            </div>

            <button className="hamburger d-md-none ms-3" onClick={toggleMenu}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-menu mt-3 d-md-none text-center">
            <ul className="list-unstyled">
              <li className="my-2">
                <a className="fw-bold text-white" href="#" onClick={() => setMenuOpen(false)}>Home</a>
              </li>
              {/* About Us in mobile */}
              <li className="my-2">
                <span className="fw-bold text-white" style={{ cursor: 'pointer' }} onClick={toggleAbout}>
                  About Us {aboutOpen ? '▲' : '▼'}
                </span>
                {aboutOpen && (
                  <ul className="list-unstyled mt-2">
                    <li><a className="text-white" href="#" onClick={() => setMenuOpen(false)}>Vision & Mission</a></li>
                    <li><a className="text-white" href="#" onClick={() => setMenuOpen(false)}>Our Legacy</a></li>
                    <li><a className="text-white" href="#" onClick={() => setMenuOpen(false)}>Leadership</a></li>
                  </ul>
                )}
              </li>
              {['Admissions', 'Programs', 'Faculty', 'Careers', 'Life @MIT Mumbai'].map((item, index) => (
                <li key={index} className="my-2">
                  <a className="fw-bold text-white" href="#" onClick={() => setMenuOpen(false)}>{item}</a>
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
