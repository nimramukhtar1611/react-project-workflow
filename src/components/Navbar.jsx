import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [categories, setCategories] = useState([]);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    axios.get('http://localhost:8000/api/dishes').then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-lg-5 px-2 py-3" style={{ backgroundColor: '#dcdcdc' }}>
      <Link className="navbar-brand fw-bold text-warning" to="/" style={{ color: '#E1AD01', fontFamily: "'Playfair Display', serif" }}>
        AURUM
      </Link>
      <span className="navbar-toggler navbar-toggler-icon d-lg-none" data-bs-toggle="collapse" data-bs-target="#navbarNav"></span>

      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          {navItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link
                className="nav-link fw-bold"
                to={item.to}
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
                style={{
                  color: hoveredIndex === index ? '#E1AD01' : '#fff',
                  borderBottom: hoveredIndex === index ? '2px solid #E1AD01' : '2px solid transparent',
                  padding: '0.5rem 1rem',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {categories.map((cat, idx) => (
            <li className="nav-item" key={`cat-${idx}`}>
              <Link
                className="nav-link fw-bold"
                to={`/category/${cat.title}`}
                style={{
                  color: '#fff',
                  borderBottom: '2px solid transparent',
                  padding: '0.5rem 1rem',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseOver={(e) => (e.target.style.borderBottom = '2px solid #E1AD01')}
                onMouseOut={(e) => (e.target.style.borderBottom = '2px solid transparent')}
              >
                {cat.title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="btn btn-warning px-4 py-2"
          style={{ background: '#E1AD01', borderRadius: '10px', border: 'none', fontWeight: '600', color: '#fff' }}
          onMouseOver={(e) => { e.currentTarget.style.background = '#c49802'; e.currentTarget.style.transform = 'scale(1.05)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = '#E1AD01'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Reserve Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
