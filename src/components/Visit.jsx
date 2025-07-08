import React from 'react';

const Visit = () => {
  const boxShadow = "0 1px 12px 0 rgba(60,72,88,.08)";
  const borderRadius = 24;

  const stepTitle = {
    background: "#fff",
    borderRadius: 12,
    padding: "12px 14px",
    fontWeight: 600,
    fontFamily: "'Poppins', Arial, sans-serif",
    fontSize: "1.25rem",
    color: "#222",
    textAlign: "center",
    boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
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

  return (
    <section className="py-4 " style={{backgroundColor:"#f6f7fa"}}>
      <div className="container">
        <div className="row g-0 shadow-sm rounded overflow-hidden" style={{ boxShadow, borderRadius }}>
          {/* Image Section */}
          <div className="col-12 col-md-5" style={{
            backgroundImage: "url('https://imgs.search.brave.com/62Zyt53HzZEovBq--SyCNmZEOxR-LWHG0eF0-Urpujw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aG90ZWxkZWwuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzEwL2hvdGVsLWRl/bC1jb3JvbmFkby1z/dW4tZGVjay1jb3Vw/bGVzLWZyaWVuZHMt/c3Vuc2V0LWZpcmUt/d2VjcmVhdGUtMjAy/My0xNjAweDEwMDAt/MS5qcGc')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 220,
          }}></div>

          {/* Content Section */}
          <div className="col-12 col-md-7 bg-white d-flex flex-column justify-content-center p-4">
            <div style={stepTitle}>Enhancing Your Visit</div>
            <ul className="ps-0 mb-3" style={{ listStyle: "none" }}>
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
            <button style={{...offerBtn,
      backgroundColor: "#E1AD01",
      color: "#fff",
      padding: "clamp(15px, 2vw, 12px) clamp(14px, 5vw, 20px)",
      borderRadius: "24px",
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "clamp(0.75rem, 2.2vw, 1rem)",
      transition: "all 0.3s ease-in-out",
    }} >Reserve Your Experience</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
          .row {
            flex-direction: column !important;
          }
          .col-12 {
            width: 100%;
          }
          button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Visit;
