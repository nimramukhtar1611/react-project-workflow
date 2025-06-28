import React from 'react';

const Visit = () => {
  // Styles
  const boxShadow = "0 1px 12px 0 rgba(60,72,88,.08)";
  const borderRadius = 24;

  const containerStyle = {
    maxWidth: 900,  
    margin: "0 auto",
    padding: "32px 15px", 
  };

  const cardStyle = {
    background: "#fff",
    borderRadius,
    boxShadow,
    display: "flex",
    flexWrap: "wrap",
    padding: 0,
    minHeight: 220, 
    width: "100%",
    gap: 0,
    overflow: "hidden",
  };

  const imageSection = {
    flex: "1 1 320px", 
    backgroundImage:
      "url('https://imgs.search.brave.com/62Zyt53HzZEovBq--SyCNmZEOxR-LWHG0eF0-Urpujw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aG90ZWxkZWwuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzEwL2hvdGVsLWRl/bC1jb3JvbmFkby1z/dW4tZGVjay1jb3Vw/bGVzLWZyaWVuZHMt/c3Vuc2V0LWZpcmUt/d2VjcmVhdGUtMjAy/My0xNjAweDEwMDAt/MS5qcGc')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: 220,
    minWidth: 320,
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  };

  const contentSection = {
    flex: "2 1 320px",
    padding: "40px 36px",
    minWidth: 320,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const stepTitle = {
    background: "#fff",
    borderRadius: 12,
    padding: "12px 14px",
    fontWeight: 600,
    fontFamily: "'Playfair Display',serif",
    fontSize: "1.25rem",
    color: "#222",
    textAlign: "center",
    boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
    margin: 0,
    marginBottom: 17,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    zIndex: 2,
  };

  const stepText = {
    fontFamily: "'Poppins', Arial, sans-serif",
    fontWeight: 400,
    fontSize: "1.03rem",
    color: "#7D7D7D",
    textAlign: "left",
    margin: 0,
    marginBottom: 10,
    display: "flex",
    alignItems: "center"
  };

  const offerBtn = {
    background: "#E1AD01",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: "1.05rem",
    padding: "10px 32px",
    cursor: "pointer",
    alignSelf: "flex-start",
    marginTop: 12
  };
  const responsiveCardStyle = {
    ...cardStyle,
    flexDirection: window.innerWidth < 800 ? "column" : "row"
  };

  return (
    <div style={containerStyle} className="mt-4">
      <div style={responsiveCardStyle}>
        <div style={imageSection}></div>
        <div style={contentSection}>
          <div style={{ ...stepTitle, fontFamily: "'Poppins', Arial, sans-serif" }}>
  Enhancing Your Visit
</div>
          <ul style={{ paddingLeft: 0, marginBottom: 18, listStyle: "none" }}>
            <li style={stepText}>
              <span style={{ color: "#E1AD01", fontSize: 22, marginRight: 10 }}>✔</span>
              Request a sommelier consultation for perfect wine pairings.
            </li>
            <li style={stepText}>
              <span style={{ color: "#E1AD01", fontSize: 22, marginRight: 10 }}>✔</span>
              Ask about our chef's table experience for a behind-the-scenes view.
            </li>
            <li style={stepText}>
              <span style={{ color: "#E1AD01", fontSize: 22, marginRight: 10 }}>✔</span>
              Inquire about our seasonal tasting menus for a curated dining journey.
            </li>
          </ul>
          <button style={offerBtn}>Reserve Your Experience</button>
        </div>
      </div>
    </div>
  );
};

export default Visit;