import React from "react";

const sidebarOptions = [
  { name: "Settings", icon: "⚙️" },
  { name: "Products", icon: "📦" },
  { name: "Category", icon: "📂" },
];

const sidebarStyle = {
  width: "240px",
  background: "#222",
  color: "#fff",
  minHeight: "100vh",
  borderRight: "2px solid #E1AD01",
  padding: "30px 0",
  fontFamily: "sans-serif"
};

const headingStyle = {
  color: "#E1AD01",
  textAlign: "center",
  marginBottom: "40px"
};

const optionButton = {
  background: "transparent",
  border: "none",
  color: "#fff",
  width: "100%",
  textAlign: "left",
  padding: "12px 30px",
  fontSize: "1.1rem",
  marginBottom: "10px",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s"
};

export default function Sidebar({ active }) {
  return (
    <div style={sidebarStyle}>
      <div style={headingStyle}>
        <h2>Admin Panel</h2>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {sidebarOptions.map((option) => (
          <li key={option.name}>
            <button
              style={{
                ...optionButton,
                color: active === option.name ? "#E1AD01" : "#fff",
                background: active === option.name ? "#444" : "transparent",
                fontWeight: active === option.name ? "bold" : "normal"
              }}
            >
              <span style={{ marginRight: "10px", fontSize: "1.3rem" }}>
                {option.icon}
              </span>
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}