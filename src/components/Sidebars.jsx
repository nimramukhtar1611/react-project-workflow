import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const sidebarOptions = [
  { name: "Basic Settings", icon: "\u2699\ufe0f", path: "/dashboard" },
  { name: "Create Category", icon: "\ud83d\udcc2", path: "/Createcategory" },
  { name: "View Category", icon: "\ud83d\udcc2", path: "/Viewcategory" },
  { name: "Create Products", icon: "\ud83d\udce6", path: "/Createproduct" },
  { name: "View Products", icon: "\ud83d\udce6", path: "/Viewproduct" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const history = useHistory();
  const location = useLocation();

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen, isMobile]);

  const handleNavigation = (path) => {
    history.push(path);
    if (isMobile) setIsOpen(false);
  };

  return (
    <>
      <style>
        {`
          .sidebar-option-animate {
            transition: background 0.3s, color 0.3s, font-weight 0.3s, transform 0.2s;
          }

          .sidebar-option-active {
            background: #444 !important;
            color: #E1AD01 !important;
            font-weight: bold !important;
            transform: scale(1.04);
            box-shadow: 0 2px 10px 0 rgba(225,173,1, 0.07);
          }

          .sidebar-option-animate:hover {
            background: #333;
            color: #E1AD01;
            transform: scale(1.03);
            font-weight: bold;
            box-shadow: 0 2px 8px 0 rgba(225,173,1, 0.04);
          }

          .hamburger {
            position: absolute;
            top: 14px;
            left: 10px;
            font-size: 1.8rem;
            background: none;
            color: rgba(225,173,1, 0.25);
            border: none;
            z-index: 1050;
            cursor: pointer;
            padding: 4px 10px;
            border-radius: 6px;
          }

          .sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  z-index: 1000;
}

          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
             @media (max-width: 768px) {
      .sidebar-option-animate {
        font-size: 0.9rem !important;
        padding: 10px 16px !important;
      }

      .sidebar-option-animate span:first-child {
        font-size: 1rem !important; /* icon size */
      }

      .sidebar-option-animate span:last-child {
        font-size: 0.9rem !important; /* text size */
      }

      .sidebar-overlay {
        background-color: rgba(0, 0, 0, 0.3);
      }

      .hamburger {
        font-size: 1.5rem !important;
        padding: 3px 8px !important;
      }

      .sidebar-title h2 {
        font-size: 1.2rem !important;
      }
    }
        `}
      </style>

      {isMobile && (
        <button className="hamburger" onClick={toggleSidebar}>☰</button>
      )}

      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <div
        className="no-scrollbar"
        style={{
        position: isMobile ? "fixed" : "fixed",
top: 0,
left: 0,
height: isMobile ? "60vh" : "100vh",
width: isMobile ? "100vw" : "50%",
          maxWidth: "300px",
          background: isMobile ? "#f4f4f4" : "#222",
          color: isMobile ? "#222" : "#fff",
          zIndex: 1051,
transform: isMobile && !isOpen ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.3s ease-in-out",
          padding: "60px 0 30px",
          borderRight: "2px solid #E1AD01",
          fontFamily: "sans-serif",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            color: "#E1AD01",
            textAlign: "center",
            width: "100%",
            marginBottom: "40px",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "500",
          }}
        >
          <h2 style={{ margin: 0 }}>Admin Panel</h2>
        </div>
{isMobile && (
  <button
    onClick={toggleSidebar}
    style={{
      position: "absolute",
      top: "10px",
      right: "15px",
      background: "transparent",
      border: "none",
      fontSize: "1.5rem",
      color: "#E1AD01",
      cursor: "pointer",
    }}
  >
    ✖
  </button>
)}

        <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
          {sidebarOptions.map((option) => (
            <li key={option.name}>
              <button
                className={`sidebar-option-animate ${
                  location.pathname === option.path ? "sidebar-option-active" : ""
                }`}
                style={{
                  background: isMobile
                    ? location.pathname === option.path
                      ? "#e0e0e0"
                      : "#fff"
                    : location.pathname === option.path
                    ? "#333"
                    : "transparent",
                  color: isMobile
                    ? location.pathname === option.path
                      ? "#000"
                      : "#333"
                    : location.pathname === option.path
                    ? "#E1AD01"
                    : "#fff",
                  fontWeight: location.pathname === option.path ? "bold" : "normal",
                  width: "100%",
                  textAlign: "left",
                  padding: isMobile ? "14px 20px" : "12px 30px",
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  marginBottom: isMobile ? "8px" : "10px",
                  cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: isMobile ? "8px" : "10px",
                  boxShadow:
                    location.pathname === option.path
                      ? "0 2px 8px rgba(0,0,0,0.05)"
                      : "none",
                  transition: "all 0.2s ease-in-out",
                }}
                onClick={() => handleNavigation(option.path)}
              >
                <span style={{ fontSize: isMobile ? "1.1rem" : "1.3rem" }}>
                  {option.icon}
                </span>
                <span>{option.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
