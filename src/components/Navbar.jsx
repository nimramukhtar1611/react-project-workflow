import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 992);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    axios.get('http://localhost:8000/api/dishes')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch categories:', err)
        toast.error("failed to fetch category");
      });

    // Track screen resize to update background dynamically
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light px-lg-5 px-2 py-3"
      style={{ backgroundColor: isSmallDevice ? '#dcdcdc' : '#222' }}
    >
      <Link
        className="navbar-brand fw-bold text-warning"
        to="/"
        style={{
          color: '#E1AD01',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 500,
        }}
      >
        AURUM
      </Link>

      {/* Toggler button */}
      <div>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          style={{ backgroundColor: "#dcdcdc" }}
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Collapsible content */}
      <div
        className={`collapse navbar-collapse justify-content-between ${isNavOpen ? 'show' : ''}`}
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
                  color: hoveredIndex === index ? '#dcdcdc' : '#fff',
                  fontSize: hoveredIndex === index ? '110%' : '100%',
                  borderBottom: hoveredIndex === index ? '2px solid #E1AD01' : '2px solid transparent',
                  padding: '0.5rem 1rem',
                  transition: 'all 0.3s ease-in-out'
                }}
                onClick={() => setIsNavOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {categories && categories.length > 0 && categories.map((cat, idx) => {
            const categoryIndex = navItems.length + idx;
            return (
              <li className="nav-item" key={`cat-${idx}`}>
                <Link
                  className="nav-link fw-bold"
                  to={`/category/${cat.title}`}
                  onMouseOver={() => setHoveredIndex(categoryIndex)}
                  onMouseOut={() => setHoveredIndex(null)}
                  style={{
                    color: hoveredIndex === categoryIndex ? '#dcdcdc' : '#fff',
                    fontSize: hoveredIndex === categoryIndex ? '110%' : '100%',
                    borderBottom: hoveredIndex === categoryIndex ? '2px solid #E1AD01' : '2px solid transparent',
                    padding: '0.5rem 1rem',
                    transition: 'all 0.3s ease-in-out'
                  }}
                  onClick={() => setIsNavOpen(false)}
                >
                  {cat.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="btn btn-warning px-4 py-2"
          style={{
            background: '#E1AD01',
            borderRadius: '10px',
            border: 'none',
            fontWeight: '600',
            color: '#fff',
            transition: 'all 0.3s ease-in-out'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#c49802';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#E1AD01';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Reserve Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
