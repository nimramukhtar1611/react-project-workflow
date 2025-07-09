import React, { useState, useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AppContext from './context/appContext'

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 992);
 const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 const { cartItem, updateCart } = useContext(AppContext);
const product = cartItem?.product;
const quantity = cartItem?.quantity || 1;

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

  <div>
      <button
        className="btn px-3 py-2"
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          color: '#E1AD01',
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick={toggleSidebar}
      >
        🛒
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 999,
          }}
        />
      )}

      {/* Sidebar */}
     {/* Sidebar */}
<div
  style={{
    position: 'fixed',
    top: 0,
    right: isSidebarOpen ? 0 : '-320px',
    width: '300px',
    height: '100vh',
    backgroundColor: '#fff',
    boxShadow: '-2px 0 10px rgba(0,0,0,0.3)',
    padding: '20px',
    zIndex: 1000,
    transition: 'right 0.3s ease-in-out',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
  }}
>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h3 style={{ margin: 0 }}>🛍️ Your Cart</h3>
    <button
      onClick={toggleSidebar}
      style={{
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: '#999',
      }}
      title="Close"
    >
      &times;
    </button>
  </div>

  <hr style={{ margin: '15px 0' }} />

  {/* Dynamic Product Content */}
 {product ? (
  <div style={{ flex: 1 }}>
    <img
      src={product.images?.[0] || "https://via.placeholder.com/150"}
      alt={product.title}
      style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
    />
    <h5 style={{ margin: '10px 0', fontWeight: '600' }}>{product.title}</h5>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
  <button
    onClick={() => updateCart(product, Math.max(quantity - 1, 1))}
    style={{
      backgroundColor: '#E1AD01',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
    }}
  >
    −
  </button>

  <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{quantity}</span>

  <button
    onClick={() => updateCart(product, quantity + 1)}
    style={{
      backgroundColor: '#E1AD01',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
    }}
  >
    +
  </button>
</div>
  
  </div>
) : (
  <p style={{ color: '#777' }}>Your cart is currently empty.</p>
)}

  <button
    onClick={toggleSidebar}
    style={{
      marginTop: 'auto',
      backgroundColor: '#E1AD01',
      color: '#fff',
      border: 'none',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
    }}
  >
    Continue
  </button>
</div>


      </div>
      </div>
    </nav>
  );
};

export default Navbar;