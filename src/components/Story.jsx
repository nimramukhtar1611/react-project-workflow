import React, { useEffect, useState } from 'react';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
const Story = () => {
  const [carouselImages, setCarouselImages] = useState([]);  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/home");
        setCarouselImages(res.data?.carouselImages || []);
      } catch (err) {
        console.error("Failed to fetch carousel images", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      {/* Hero Section */}
     <section className="position-relative" style={{ minHeight: "100vh", overflow: "hidden" }}>
        {/* Carousel Background */}
        <Carousel fade controls={false} indicators={false} interval={5000} pause={false}>
          {carouselImages.map((src, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={src}
                alt={`Slide ${index + 1}`}
                style={{
                  height: "100vh",
                  objectFit: "cover",
                  filter: "brightness(0.4)",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

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
            <button className="btn fw-semibold" style={{
              background: "#E1AD01",
              color: "#fff",
              borderRadius: "25px",
              padding: "12px 36px",
              fontWeight: 600,
              fontSize: "1rem",
              border: "none",
            }}>
              Reserve a Table
            </button>

            <button className="btn fw-semibold" style={{
              background: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: "25px",
              padding: "12px 36px",
              fontWeight: 600,
              fontSize: "1rem",
            }}>
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
