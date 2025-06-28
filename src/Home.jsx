import React from 'react'
const Home = () => {
 return (
  <>
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f7f7f7" }}>
      
      {/* Section */}
      <section className="py-5" style={{ background: "#dcdcdc", textAlign: "center" }}>
        <div className="container">
          <h1
            className="fw-bold mb-3"
            style={{
              color: "#fff",
              fontSize: "2.6rem",
              letterSpacing: "1px",
              lineHeight: 1.15,
              textShadow: "0 1px 10px rgba(60,60,60,0.09)",
               fontFamily:"'Playfair Display', serif"
             
            }}
          >
            Exquisite Dining Experience<br />For Unforgettable Moments
          </h1>

          <p
            className="mx-auto mb-4"
            style={{
              color: "#efefef",
              fontWeight: 400,
              fontSize: "1.18rem",
              maxWidth: 640,
            }}
          >
            Savor artfully crafted cuisine in an ambiance of refined elegance. Our culinary masterpieces await your discovery, innovation with timeless design principles.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <button
              className="btn fw-semibold"
              style={{
                background: "#E1AD01",
                color: "#fff",
                borderRadius: "25px",
                padding: "12px 36px",
                fontWeight: 600,
                fontSize: "1rem",
                border: "none"
              }} onMouseOver={(e) => {
              e.currentTarget.style.background = "#c49802";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#E1AD01";
              e.currentTarget.style.transform = "scale(1)";
            }}
            >
              Reserve a Table
            </button>

            <button
              className="btn fw-semibold"
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                borderRadius: "25px",
                padding: "12px 36px",
                fontWeight: 600,
                fontSize: "1rem"
              }}
               onMouseOver={(e) => {
              e.currentTarget.style.background = "#c4c4c4";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
            >
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center flex-column flex-md-row">
            
            {/* Image */}
            <div className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <img
                src="https://imgs.search.brave.com/MFicTZ8TbJdxMaJz7UwlP2j1JjWPdZ_Fk0uqG3vledo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzc0/MDQyL3BleGVscy1w/aG90by03NzQwNDIu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  aspectRatio: "1 / 1",
                  background: "#e1e1e1",
                  borderRadius: "20px",
                  boxShadow: "0 2px 10px #e5e5e5",
                  objectFit: "cover"
                }}
                alt="Our Story"
              />
            </div>

            {/* Text Content */}
            <div className="col-12 col-md-7">
              <h2
                className="fw-bold mb-3"
                style={{
                  color: "#222",
                  fontSize: "2rem",
                  fontFamily:"'Playfair Display', serif"
                }}
              >
                Our Story
              </h2>

              <p style={{ color: "#444", fontSize: "1.08rem", marginBottom: "16px" , fontFamily: "'Poppins', Arial, sans-serif",
}}>
                Founded in 2010, AURUM began as a humble bistro with a vision to transform dining into an art form. Our passion for exceptional ingredients and masterful preparation has evolved into the refined experience we offer today.
              </p>

              <div style={{
                background: "#faf9f7",
                borderLeft: "4px solid #b4924e",
                padding: "12px 20px",
                marginBottom: "16px",
                fontStyle: "italic",
                color: "#545454",
                fontSize: "1.08rem",
                fontWeight: 600
              }}>
                "Every dish tells a story, every flavor creates a memory."
              </div>

              <p style={{ color: "#444", fontSize: "1.08rem", fontFamily: "'Poppins', Arial, sans-serif",
}}>
                Today, we continue to honor our culinary traditions while embracing innovation. Our dedicated team of chefs and staff work tirelessly to create unforgettable moments for our guests, combining the finest seasonal ingredients with impeccable service.
              </p>

              <div className="d-flex align-items-center mt-4">
                <img src="https://imgs.search.brave.com/OKhuh-w1uC-Zw8G5m0rLAwWVhPkXRg-y5YhprPJd_Ek/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3dpbmJ1cm5lbWFk/ZGlzb24uY28udWsv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MTIvVEJQXzUzNDAu/d2VicA"style={{
                  width: "36px",
                  height: "36px",
                  background: "#e1e1e1",
                  borderRadius: "50%",
                  marginRight: "13px"
                }}/>
                  {/* Chef avatar placeholder */}
                <div>
                  <div style={{
                    color: "#222",
                    fontWeight: 600,
                    fontSize: "1.02rem",
                 fontFamily: "'Poppins', Arial, sans-serif",

                  }}>
                    Victoria Walton
                  </div>
                  <div style={{
                    color: "#888",
                    fontSize: "0.98rem",
            fontFamily: "'Poppins', Arial, sans-serif",
                  }}>
                    Founder & Executive Chef
                  </div>
                </div>
              </div>
            </div> {/* <-- This was the missing closing div */}
          </div>
        </div>
      </section>
    </div>
  </>
);

}

export default Home
