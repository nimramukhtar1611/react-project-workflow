import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AppContext from './context/appContext';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sidebarWidth, setSidebarWidth] = useState("300px");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 992);

  const { cartItem, updateCart } = useContext(AppContext);
  const product = cartItem?.product;
  const quantity = cartItem?.quantity || 1;

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const updateSidebarWidth = () => {
      if (window.innerWidth <= 480) {
        setSidebarWidth("100vw");
      } else if (window.innerWidth <= 768) {
        setSidebarWidth("80vw");
      } else {
        setSidebarWidth("300px");
      }
    };

    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 992);
      updateSidebarWidth();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/dishes')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch categories:', err);
        toast.error("Failed to fetch category");
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-lg-5 px-2 py-3"
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
<div>   <button
        className="navbar-toggler d-lg-none"
        type="button"
        style={{ backgroundColor: "#dcdcdc" }}
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button></div>
   

      {/* Collapsible navbar */}
      <div className={`collapse navbar-collapse justify-content-between ${isNavOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav mx-auto">
          {navItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link
                className="nav-link fw-bold"
                to={item.to}
                onMouseOver={() => setHoveredIndex(index)}
                onMouseOut={() => setHoveredIndex(null)}
                onClick={() => setIsNavOpen(false)}
                style={{
                  color: hoveredIndex === index ? '#dcdcdc' : '#fff',
                  fontSize: hoveredIndex === index ? '110%' : '100%',
                  borderBottom: hoveredIndex === index ? '2px solid #E1AD01' : '2px solid transparent',
                  padding: '0.5rem 1rem',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {categories.map((cat, idx) => {
            const categoryIndex = navItems.length + idx;
            return (
              <li className="nav-item" key={`cat-${idx}`}>
                <Link
                  className="nav-link fw-bold"
                  to={`/category/${cat.title}`}
                  onMouseOver={() => setHoveredIndex(categoryIndex)}
                  onMouseOut={() => setHoveredIndex(null)}
                  onClick={() => setIsNavOpen(false)}
                  style={{
                    color: hoveredIndex === categoryIndex ? '#dcdcdc' : '#fff',
                    fontSize: hoveredIndex === categoryIndex ? '110%' : '100%',
                    borderBottom: hoveredIndex === categoryIndex ? '2px solid #E1AD01' : '2px solid transparent',
                    padding: '0.5rem 1rem',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {cat.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Cart Button + Sidebar */}
        <div>
        <button
  className="btn px-3 py-2 d-flex align-items-center justify-content-center"
  style={{
    background: "transparent",
    border: "none",
    fontSize: "1.5rem",
    color: "#E1AD01",
    position: "relative",
    cursor: "pointer",
    width: "48px",
    height: "48px",
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
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                zIndex: 999,
              }}
            />
          )}

          {/* Cart Sidebar */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: isSidebarOpen ? 0 : `-${sidebarWidth}`,
              width: sidebarWidth,
              height: "100vh",
              backgroundColor: "#fff",
              boxShadow: "-2px 0 10px rgba(0,0,0,0.3)",
              padding: "20px",
              zIndex: 1050,
              transition: "right 0.3s ease-in-out",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ margin: 0, fontSize: "1.2rem" }}>🛍️ Your Cart</h3>
              <button
                onClick={toggleSidebar}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#999",
                }}
                title="Close"
              >
                &times;
              </button>
            </div>

            <hr style={{ margin: "15px 0" }} />

            {product ? (
              <div style={{ flex: 1 }}>
                <img
                  src={product.images?.[0] || "https://via.placeholder.com/150"}
                  alt={product.title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    objectFit: "cover",
                  }}
                />
                <h5 style={{ margin: "10px 0", fontWeight: "600", fontSize: "1rem" }}>
                  {product.title}
                </h5>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <button
                    onClick={() => updateCart(product, Math.max(quantity - 1, 1))}
                    style={{
                      backgroundColor: "#E1AD01",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    −
                  </button>

                  <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{quantity}</span>

                  <button
                    onClick={() => updateCart(product, quantity + 1)}
                    style={{
                      backgroundColor: "#E1AD01",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ) : (
              <p style={{ color: "#777", fontSize: "0.9rem" }}>Your cart is currently empty.</p>
            )}

            <button
              onClick={toggleSidebar}
              style={{
                marginTop: "auto",
                backgroundColor: "#E1AD01",
                color: "#fff",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
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
