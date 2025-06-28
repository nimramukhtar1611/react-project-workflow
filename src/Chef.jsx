import React from "react";

const Chef = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "#f6f7fa",
        minHeight: "100vh",
        padding: "3vw 0",
        fontFamily: "'Poppins', Arial, sans-serif",
      }}
    >
      <div
        className="row justify-content-center align-items-center"
        style={{
          margin: "0",
          padding: "0",
        }}
      >
        {/* Image Box */}
        <div className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
          <div
            style={{
              width: "100%",
              maxWidth: "370px",
              aspectRatio: "1/1",
              borderRadius: "18px",
              margin: "0",
              minHeight: "370px",
              minWidth: "250px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://imgs.search.brave.com/64lW25aG8z7Cndgu4E128g66DtBGINO26ZRYPtbKZiU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaGVmLXByZXBh/cmVzLXNhbGFkLXNl/YWZvb2QtdmVnZXRh/Ymxlc18zMDI4NzIt/NTg0LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA"
              alt="Chef Sibyl Vane"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="col-12 col-md-7">
          <div
            style={{
              padding: "10px 0 0 0",
              color: "#222",
              minWidth: "260px",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "2rem",
                marginBottom: "12px",
                color: "#222",
              }}
            >
              Meet Our Chef
            </h2>
            <div
              style={{
                fontWeight: 600,
                fontSize: "1.05rem",
                color: "#222",
                marginBottom: "2px",
            fontFamily: "'Poppins', Arial, sans-serif",
              }}
            >
              Sibyl Vane
            </div>
            <div
              style={{
                color: "#b89f5a",
                fontWeight: 500,
                fontSize: "0.95rem",
                marginBottom: "15px",
            fontFamily: "'Poppins', Arial, sans-serif",
              }}
            >
              Executive Chef
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "#222",
                marginBottom: "15px",
                lineHeight: 1.6,
            fontFamily: "'Poppins', Arial, sans-serif",
              }}
            >
              With over 20 years of culinary expertise, Chef Sibyl brings passion and
              innovation to every dish. His journey began in Paris before leading
              kitchens in New York and Tokyo, where he refined his distinctive
              approach to modern fine dining.
            </div>
            <div
              style={{
                borderLeft: "3px solid #b89f5a",
                background: "#fff",
                margin: "0 0 15px 0",
                padding: "12px 18px",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "1.01rem",
                color: "#222",
                fontFamily: "'Arial',serif",
                boxShadow: "0 0 0 0 rgba(0,0,0,0)",
              }}
            >
              <span style={{ color: "#222", fontWeight: 600 }}>
                "My philosophy is simple: respect for ingredients, precision in
                technique, and heart in presentation. Every plate tells a story of
                tradition reimagined."
              </span>
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "#222",
                marginBottom: "22px",
            fontFamily: "'Poppins', Arial, sans-serif",
                lineHeight: 1.6,
              }}
            >
              Chef Sibyl's commitment to locally sourced, seasonal ingredients ensures
              an ever-evolving menu that captures the essence of contemporary cuisine
              while honoring culinary heritage.
            </div>

            {/* Awards */}
           <div className="d-flex flex-wrap gap-2 mb-4">
  {[
    "Michelin Star 2020",
    "James Beard Award",
    "Food Best Chef",
  ].map((award, index) => (
    <span
      key={index}
      style={{
        background: "#f4f1e8",
        color: "#b89f5a",
        borderRadius: "24px",
        fontWeight: 600,
        fontSize: "0.99rem",
        padding: "7px 18px",
        fontFamily: "'Playfair Display', serif",
        marginBottom: "6px",
        display: "inline-block",
        transition: "all 0.3s ease-in-out",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.07)";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(184, 159, 90, 0.3)";
        e.currentTarget.style.background = "#fffaf0";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.background = "#f4f1e8";
      }}
    >
      {award}
    </span>
  ))}
</div>


            {/* Button */}
            <div>
              <button
  type="button"
  style={{
    background: "#E1AD01",
    color: "#fff",
    border: "none",
    borderRadius: "24px",
    fontWeight: 700,
    fontSize: "1.05rem",
    padding: "13px 35px",
    fontFamily: "'Arial', serif",
    boxShadow: "0 2px 8px 0 rgba(184,159,90,0.08)",
    transition: "all 0.3s ease-in-out",
    marginBottom: "10px",
    cursor: "pointer",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.background = "#9e893f";
    e.currentTarget.style.transform = "scale(1.07)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.background = "#E1AD01";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  Discover Chef's Experience
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
