import React from 'react'

const Dine = () => {
  const stepCircle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "#F6F6F6",
  color: "#E1AD01",
  fontWeight: 600,
  fontSize:"1.5rem",
  marginBottom: 12,
  border: "1px solid #E5E5E5",
};const sectionTitle = {
     fontFamily:"'Playfair Display', serif",
  fontWeight: 600,
  fontSize: "2rem",
  color: "#222",
  textAlign: "center",
  marginBottom: "1.5rem",
};
const subText = {
            fontFamily: "'Poppins', Arial, sans-serif",
  fontWeight: 400,
  fontSize: "0.97rem",
  color: "#7D7D7D",
  textAlign: "center",
  marginBottom: "2.5rem",
};
const cardTitle = {
           background: "#fff",
          borderRadius: 12,
          padding: "12px 14px",
          fontWeight: 600,
          fontFamily: "Playfair Display',serif",
          fontSize: "1.07rem",
          color: "#222",
          textAlign: "center",
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
          marginTop: "-1px", 
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          zIndex: 2
};
const stepTitle = {
  ...cardTitle,
  fontSize: "1.07rem",
  margin: 0,
  marginBottom: 7,
};
const stepText = {
            fontFamily: "'Poppins', Arial, sans-serif",
  fontWeight: 400,
  fontSize: "0.97rem",
  color: "#7D7D7D",
  textAlign: "center",
  margin: 0,
};
const boxShadow = "0 1px 6px 0 rgba(60,72,88,.04)";
const borderRadius = 16;
  return (
    <div style={{backgroundColor:"#f6f7fa", paddingBottom:16 }}>
      <div className="container" style={{ maxWidth: 1200  }}>
      <div style={sectionTitle}>Simple Steps to Dine</div>
      <div style={subText}>
        Experience our seamless dining journey from reservation to dessert!
      </div>
      <div className="row g-4">
        {[
          {
            title: "Reserve Your Table",
            text: "Book with us to secure your preferred dining time. We recommend reservations 2-3 days in advance for the best experience."
          },
          {
            title: "Arrive & Be Seated",
            text: "Our staff will welcome and guide you to your table. Let us know any special occasions for personalized service."
          },
          {
            title: "Enjoy Your Experience",
            text: "Savor our delectable dishes and celebrate moments, offering unparalleled service for a truly exceptional visit."
          }
        ].map((step, i) => (
          <div className="col-12 col-md-4" key={i}>
            <div style={{
              background: "#fff",
              borderRadius,
              boxShadow,
              padding: "32px 18px 20px 18px",
              minHeight: 215,
              textAlign: "center"
            }}>
              <div style={stepCircle}>{i+1}</div>
              <div style={stepTitle}>{step.title}</div>
              <div style={stepText}>{step.text}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
  )
}

export default Dine