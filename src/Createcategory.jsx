import React, { useState, useEffect } from "react";
import Sidebar from './components/Sidebars'
import Meta from './components/Meta'
import Menuedit from './components/Menuedit'
const Createcategory = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      if (!isAuthenticated) {
        window.location.href = "/admin";
        return null;
      }
    
      const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        window.location.href = "/admin";
      };
  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
      {/* Sidebar */}
      <div style={{ flex: isMobile ? "unset" : "0 0 300px" }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: isMobile ? "20px 10px" : "30px",
          marginLeft: isMobile ? "0" : "0px",
          background: "#f9f9f9",
          minHeight: "100vh",
          paddingTop:"35px"
        }}
      >
<Meta/>
        <Menuedit />
        
      </div>
    </div>
  )
}

export default Createcategory
