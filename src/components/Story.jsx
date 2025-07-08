import React from 'react';
const Story = () => {
  return (
    <>
      {/* Hero Section */}
<section className="position-relative" style={{minHeight: "100vh", overflow: "hidden" }}>
  {/* Carousel Background */}
  <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
  {[
    "https://imgs.search.brave.com/kXVBKecEKuC7MDG2LDqh7mhJ0K92Penx-C1NcQHXfDY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzM2LzMwLzI2/LzM2MF9GXzYzNjMw/MjYwOV9UYjFKdERU/UTR6YXdPMHViNkwy/Zkh6bHJXNTg2Zjl0/ci5qcGc",
    "https://imgs.search.brave.com/JJRI54tWk20uapF6iLVPKo7Lc8ZJspK5fuT7NsFMA8E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/MDMzNzA3L3Bob3Rv/L3NocmltcC1zY2Ft/cGkuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXNYQ3lBbVZP/SUc5ODY2Q0RiRGRn/eElfNDM4ZVYyUUhm/YWt3RHFxZ3hnekE9",
    "https://imgs.search.brave.com/wnpMGzwvm0ESY-nqm43sDgHIrABOtXYHd294--TWvI0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2hlZXNl/c2NpZW50aXN0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNy9Qcm92b2xl/dGEuanBnP3Jlc2l6/ZT0xMDI0LDc2OCZz/c2w9MQ"
  ].map((src, index) => (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
      <img
        src={src}
        className="d-block w-100"
        style={{
          objectFit: "cover",
          height: "100vh",
          filter: "brightness(0.4)",
        }}
        alt={`Slide ${index + 1}`}
      />
    </div>
  ))}
</div>

    </div>
  {/* Overlay Text */}
  <div className="position-absolute top-50 start-50 translate-middle text-center px-3" style={{ zIndex: 2 }}>

    <h1
      className="fw-bold mb-3"
      style={{
        color: "#fff",
        fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
        letterSpacing: "1px",
        lineHeight: 1.2,
        textShadow: "0 1px 10px rgba(60,60,60,0.09)",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      Exquisite Dining Experience
      <br className="d-none d-md-block" />
      For Unforgettable Moments
    </h1>

    <p
      className="mx-auto mb-4"
      style={{
        color: "#efefef",
        fontWeight: 400,
        fontSize: "1.1rem",
        maxWidth: "640px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Savor artfully crafted cuisine in an ambiance of refined elegance.
      Our culinary masterpieces await your discovery.
    </p>

    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
      <button
        className="btn fw-semibold"
        style={{
          background: "#E1AD01",
          color: "#fff",
          borderRadius: "25px",
          padding: "12px 36px",
          fontWeight: 600,
          fontSize: "1rem",
          border: "none",
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
          fontSize: "1rem",
        }}
      >
        Explore Menu
      </button>
    </div>
  </div>
</section>

   {/* Story Section */} 
      <section className="pt-5" style={{ backgroundColor:"#f6f7fa" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <img
                className="img-fluid"
                src="https://imgs.search.brave.com/MFicTZ8TbJdxMaJz7UwlP2j1JjWPdZ_Fk0uqG3vledo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNzc0/MDQyL3BleGVscy1w/aG90by03NzQwNDIu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  aspectRatio: "1 / 1",
                  borderRadius: "20px",
                  boxShadow: "0 2px 10px #e5e5e5",
                  objectFit: "cover",
                }}
                alt="Our Story"
              />
            </div>

            <div className="col-12 col-md-7">
              <h2
                className="fw-bold mb-3"
                style={{
                  color: "#222",
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Our Story
              </h2>

              <p
                style={{
                  color: "#444",
                  fontSize: "1.08rem",
                  fontFamily: "'Poppins', Arial, sans-serif",
                }}
              >
                Founded in 2010, AURUM began as a humble bistro with a vision to
                transform dining into an art form.
              </p>

              <div
                style={{
                  background: "#faf9f7",
                  borderLeft: "4px solid #b4924e",
                  padding: "12px 20px",
                  marginBottom: "16px",
                  fontStyle: "italic",
                  color: "#545454",
                  fontSize: "1.08rem",
                  fontWeight: 600,
                }}
              >
                "Every dish tells a story, every flavor creates a memory."
              </div>

              <p
                style={{
                  color: "#444",
                  fontSize: "1.08rem",
                  fontFamily: "'Poppins', Arial, sans-serif",
                }}
              >
                Today, we continue to honor our culinary traditions while embracing
                innovation...
              </p>

              <div className="d-flex align-items-center mt-4">
                <img
                  src="https://imgs.search.brave.com/OKhuh-w1uC-Zw8G5m0rLAwWVhPkXRg-y5YhprPJd_Ek/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3dpbmJ1cm5lbWFk/ZGlzb24uY28udWsv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MTIvVEJQXzUzNDAu/d2VicA"
                  className="img-fluid"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#e1e1e1",
                    borderRadius: "50%",
                    marginRight: "13px",
                    objectFit: "cover",
                  }}
                  alt="Chef"
                />
                <div>
                  <div
                    style={{
                      color: "#222",
                      fontWeight: 600,
                      fontSize: "1.02rem",
                      fontFamily: "'Poppins', Arial, sans-serif",
                    }}
                  >
                    Victoria Walton
                  </div>
                  <div
                    style={{
                      color: "#888",
                      fontSize: "0.98rem",
                      fontFamily: "'Poppins', Arial, sans-serif",
                    }}
                  >
                    Founder & Executive Chef
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
