import React, { useState } from "react";
import logo from "../../assets/mit-wpu-logo.png";
import "./header.css";
import { Link } from "react-router-dom";

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
    <header style={{ backgroundColor: "#000080" }}>
      <div className="container-fluid py-2">
        <div className="d-flex align-items-center justify-content-between">
          {/* Left: Logo */}
          <div className="d-flex align-items-center">
            <Link to="/">
              <img
                src={logo}
                alt="College Logo"
                className="logo-custom"
                style={{ height: "120px", width: "auto", cursor: "pointer" }}
              />
            </Link>
          </div>
          {/* Center: Navigation (desktop only) */}
          <div className="flex-grow-1 mx-4 d-none d-md-block text-center">
            <nav>
              <ul className="nav justify-content-center mb-1">
                <li className="nav-item">
                  <Link className="nav-link fw-bold nav-link-custom" to="/">
                    Home
                  </Link>
                </li>

                {/* About Us with Dropdown */}
                <li className="nav-item dropdown-custom">
                  <Link className="nav-link fw-bold nav-link-custom" to="#">
                    About Us
                  </Link>

                  <ul className="dropdown-menu-custom">
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
                        <Link
                          className="dropdown-item"
                          to={`/about/${item
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/ /g, "-")}`}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {[
                  "Admissions",
                  "Programs",
                  "Faculty",
                  "Careers",
                  "Life @MIT Mumbai",
                ].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link fw-bold nav-link-custom"
                      to={`/${item
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-")}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: Hamburger */}
          <div className="d-flex align-items-center">
            <div className="d-none d-md-block">
              <Link
                to="/apply-now" // Assuming there's a separate page for "Apply Now"
                className="btn btn-warning fw-bold px-4 py-2 apply-now-button"
              >
                Apply Now
              </Link>
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
                <Link
                  className="fw-bold text-white"
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              {/* About Us in mobile */}
              <li className="my-2">
                <span
                  className="fw-bold text-white"
                  style={{ cursor: "pointer" }}
                  onClick={toggleAbout}
                >
                  About Us {aboutOpen ? "▲" : "▼"}
                </span>
                {aboutOpen && (
                  <ul className="list-unstyled mt-2">
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
                        <Link
                          className="text-white"
                          to={`/about/${item
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/ /g, "-")}`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {[
                "Admissions",
                "Programs",
                "Faculty",
                "Careers",
                "Life @MIT Mumbai",
              ].map((item, index) => (
                <li key={index} className="my-2">
                  <Link
                    className="fw-bold text-white"
                    to={`/${item
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/ /g, "-")}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <Link
                to="/apply-now"
                className="btn btn-warning fw-bold px-4 py-2 apply-now-button"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
