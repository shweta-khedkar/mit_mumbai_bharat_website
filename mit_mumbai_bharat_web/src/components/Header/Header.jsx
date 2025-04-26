import React from 'react';
import logo from '../../assets/mit-wpu-logo.png';
import './header.css'; // Import custom CSS

const Header = () => {
  return (
    <header style={{ backgroundColor: '#000080' }}> {/* Dark Royal Blue */}
      <div className="container-fluid py-4">
        <div className="d-flex align-items-center justify-content-between">

        {/* Left: Logo */}
        <div className="d-flex align-items-center">
            <img 
              src={logo} 
              alt="College Logo" 
              className="logo-custom"
              style={{ height: '130px', width: 'auto' }}
            />
          </div>

          {/* Center: Main Menu */}
          <div className="text-center flex-grow-1 mx-4">
            <nav>
              <ul className="nav justify-content-center mb-1">
                {['Home', 'About Us', 'Admissions', 'Programs', 'Student Corner'].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link  fw-bold nav-link-custom" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <hr className="border-light my-1" style={{ width: '100%' }} />
            </nav>

            {/* Bottom Menu */}
            <nav>
              <ul className="nav justify-content-center mt-1">
                {['IT @ MIT', 'Placements', 'Faculty', 'Careers', 'Life @MIT Mumbai', 'News & Events'].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link  fw-bold nav-link-custom" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

         {/* Right: Apply Now Button */}
         <div className="d-flex align-items-center">
            <a href="#" className="btn btn-warning fw-bold px-4 py-2 apply-now-button">
              Apply Now
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
