import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/" },
    { label: "Menu", to: "/" },
    { label: "Chef", to: "/" },
    { label: "Gallery", to: "/" },
    { label: "Reservation", to: "/" },
    { label: "Contact", to: "/" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5 py-3" style={{ backgroundColor: "#dcdcdc" }}>
      <div className="container-fluid px-0 d-flex justify-content-between align-items-center">
        <a
          className="navbar-brand fw-bold text-warning"
          href="#"
          style={{
            color: "#E1AD01",
            fontWeight: "bold",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          AURUM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link fw-bold"
                  to={item.to}
                  onMouseOver={() => setHoveredIndex(index)}
                  onMouseOut={() => setHoveredIndex(null)}
                  style={{
                    color: hoveredIndex === index ? "#E1AD01" : "#fff",
                    fontWeight: "600",
                    position: "relative",
                    transition: "all 0.3s ease-in-out",
                    borderBottom: hoveredIndex === index ? "2px solid #E1AD01" : "2px solid transparent",
                    padding: "0.5rem 1rem",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-warning px-4 py-2"
            style={{
              background: "#E1AD01",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
              color: "#fff",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#c49802";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#E1AD01";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
