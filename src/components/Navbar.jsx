import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AppContext from './context/appContext';
import CheckoutPage from '../CheckoutPage'
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sidebarWidth, setSidebarWidth] = useState("300px");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 992);
const history = useHistory();
const { cartItems, updateCart, removeFromCart, IsSidebarOpen, setSidebarOpen } = useContext(AppContext);
  const product = cartItems?.product;
  const quantity = cartItems?.quantity || 1;
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!IsSidebarOpen);
      setSidebarOpen(!IsSidebarOpen);

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

  return (<>
  <style>
  {`
    .navbar-dark .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  `}
</style>
    <nav className="navbar navbar-expand-lg navbar-dark px-lg-5 px-2 py-3"
      style={{ backgroundColor: isSmallDevice ? '#222' : '#222' }}
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

      {/* Toggler + Cart for small devices */}
      <div className="d-flex d-lg-none align-items-center gap-2">
        {/* Navbar toggler */}
        <button
          className="navbar-toggler"
          type="button"
          style={{ backgroundColor: "#222", }}
          onClick={toggleNavbar}
        >
          <span style={{color:"white"}} className="navbar-toggler-icon"></span>
        </button>

        {/* Cart icon for small screen */}
        <button
          className="btn px-2 py-1 d-flex align-items-center justify-content-center"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "1.3rem",
            color: "#E1AD01",
            position: "relative",
            cursor: "pointer",
            width: "40px",
            height: "40px",
          }}
          onClick={toggleSidebar}
        >
          🛒
        </button>
      </div>

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

        {/* Cart Button for large screens */}
        <div className="d-none d-lg-block">
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
        </div>
      </div>

      {/* Overlay */}
      {IsSidebarOpen && (
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
    right: IsSidebarOpen ? 0 : `-${sidebarWidth}`,
    width: sidebarWidth,
    height: "100vh",
    backgroundColor: "#fff",
    boxShadow: "-2px 0 10px rgba(0,0,0,0.3)",
    zIndex: 1050,
    transition: "right 0.3s ease-in-out",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    display: "flex",
    flexDirection: "column",
  }}
>

       {/* Header */}
<div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>🛍️ Your Cart</h3>
  <div style={{position:"relative"}}> <button
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
  </button></div>
 
</div>

<hr style={{ margin: "0 20px" }} />

<div
  style={{
    flex: 1,
    overflowY: "auto",
    padding: "0 20px",
  }}
>
 {cartItems.length > 0 ? (
  cartItems.map((item, index) => (
  <div
  key={index}
  style={{
    position: "relative", 
    display: "flex",
border:"1px solid black",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "12px",
    marginBottom: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    width: "100%",
  }}
>
  <button
    onClick={() => removeFromCart(item.product._id)}
    style={{
      position: "absolute",
 top: isMobile ? "1px" : "2px",
  right: isMobile ? "45%" : "0px",
       background: "transparent",
      border: "none",
      fontSize: "1.5rem",
      color: "#999",
      cursor: "pointer",
    }}
    title="Remove"
  >
    &times;
  </button>

      {/* Image */}
      <img
        src={item.product.images?.[0] || "https://via.placeholder.com/100"}
        alt={item.product.title}
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "6px",
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <div style={{ flex: 1 }}>
        {/* Product Title */}
        <h6 style={{ margin: "0 0 6px", fontWeight: "bold", fontSize: "1rem" }}>
          {item.product.title}
        </h6>

        {/* Quantity Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "6px",
          }}
        >
          <button
            style={{
              padding: "4px 10px",
              fontSize: "1rem",
              backgroundColor: "#eee",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
onClick={() => {
  if (item.quantity === 1) {
    removeFromCart(item.product._id);
  } else {
    updateCart(item.product, item.quantity - 1);
  }
}}
          >
            −
          </button>
          <span style={{ minWidth: "25px", textAlign: "center" }}>
            {item.quantity}
          </span>
          <button
            style={{
              padding: "4px 10px",
              fontSize: "1rem",
              backgroundColor: "#eee",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            onClick={() => updateCart(item.product, item.quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Price */}
        <p style={{ margin: 0, fontWeight: "500" }}>
          Price: Rs. {item.product.price }
        </p>
      </div>
    </div>
  ))
) : (
  <p>Your cart is currently empty.</p>
)}
</div>

{cartItems.length > 0 && (
  <div style={{ padding: "20px" }}>
  <div
      style={{
        fontWeight: "bold",
        marginBottom: "10px",
        fontSize: "1.1rem",
        color: "#333",
      }}
    >
      Total Rs: {cartItems.reduce((acc, item) => {
        const price = parseFloat(String(item.product.price).replace(/[^0-9.]/g, ""));
        return acc + price * item.quantity;
      }, 0).toFixed(2)}
    </div>
     <button
      onClick={() => {
        toggleSidebar();
        history.push("/checkout");
      }}
      style={{
        width: "100%",
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
      Checkout
    </button>
  </div>
)}

</div>

    </nav>
    </>
  );
};

export default Navbar;
