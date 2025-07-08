import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-bootstrap'; 
import axios from "axios";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CustomCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-100 position-relative" style={{ height: "100vh" }}>
      <img
        src={images[index]}
        alt={`carousel-${index}`}
        className="w-100 position-absolute top-0 start-0"
        style={{
          height: "100vh",
          objectFit: "cover",
          filter: "brightness(0.2)",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

const CategoryPage = () => {
  const history = useHistory();
  const { title } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProductImages, setSelectedProductImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8000/api/dishes").then((res) => {
      const found = res.data.find(
        (cat) => cat.title.toLowerCase() === title.toLowerCase()
      );
      if (found && !Array.isArray(found.images) && Array.isArray(found.image)) {
        found.images = found.image;
      }

      setCategory(found);

      if (found && found._id) {
        axios.get("http://localhost:8000/api/products").then((productRes) => {
          const filtered = productRes.data.filter(
            (prod) => prod.category?._id === found._id
          );
          setProducts(filtered);
        });
      }
    });
  }, [title]);

  if (!category) {
    return (
     <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f7fa",
      }}
    >
      <div
        style={{
          color: "#E1AD01",
          fontWeight: "bold",
          letterSpacing: "3px",
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontFamily: "'Playfair Display', serif",
          textAlign: "center",
          textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
        }}
      >
        AURUM...
      </div>
    </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
     <section
      className="position-relative w-100"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {Array.isArray(category.images) && category.images.length > 0 ? (
        <Carousel
          fade
          controls={false} 
          indicators={false}
          interval={3000} 
          pause={false} 
          style={{ height: "100vh" }}
        >
          {category.images.map((image, index) => (
            <Carousel.Item key={index} style={{ height: "100vh" }}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="d-block w-100"
                style={{
                  objectFit: "cover",
                  height: "100vh",
                  filter: "brightness(0.7)"
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div
          className="w-100 h-100 bg-secondary d-flex justify-content-center align-items-center text-white"
          style={{ height: "100vh" }}
        >
          No images available
        </div>
      )}

      <div
        className="position-absolute top-50 start-50 translate-middle text-center px-3"
        style={{ zIndex: 2 }}
      >
        <h1
          className="fw-bold mb-3"
          style={{
            color: "#fff",
            fontSize: "clamp(5.8rem, 5vw, 10.4rem)",
            letterSpacing: "2px",
            lineHeight: 1.2,
            textShadow: "0 1px 10px rgba(60,60,60,0.09)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {category.title}
        </h1>
      </div>
    </section>
   {/* Product Cards */}
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#f6f7fa",
          fontFamily: "'Poppins', Arial, sans-serif",
        }}
      >
        <div className="row justify-content-center">
          {products.map((product) => (
            <div
              key={product._id}
              className="col-12 col-sm-6 col-md-4 d-flex flex-column align-items-center mb-5"
            >
              <img
                src={product.images?.[0] || "https://via.placeholder.com/360x280?text=No+Image"}
                alt={product.title}
                onClick={() => {
                  setSelectedProductImages(product.images || []);
                  setCurrentImageIndex(0);
                }}
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer"
                }}
              />

              <div className="mt-3 text-center" style={{ maxWidth: "360px" }}>
                <h5
                  className="mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#333",
                  }}
                >
                  {product.title}
                </h5>
                <p
                  className="mb-2"
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    lineHeight: "1.5",
                    padding: "0 10px",
                  }}
                >
                  {product.desc}
                </p>
                <span
                  style={{
                    color: "#E1AD01",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  Rs {product.price}
                </span>
                <br />
<button
  className="btn btn-outline-warning px-3 py-1 mt-2 fw-semibold"
  style={{
    borderRadius: "30px",
    fontSize: "1rem",
    letterSpacing: "1px",
    transition: "all 0.3s ease",
    backgroundColor: "transparent",
    color: "#E1AD01",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#E1AD01";
    e.target.style.color = "#fff";
    e.target.style.boxShadow = "0 4px 12px rgba(225, 173, 1, 0.5)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#E1AD01";
    e.target.style.boxShadow = "none";
  }}
    onClick={() => history.push(`/product/${product._id}`)}

>
Add To Cart</button>
              </div>
            </div>
          ))}
          {products.length === 0 && (
            <div className="text-center text-muted w-100 mt-5">
              No products available in this category.
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Image Modal Carousel */}
      {selectedProductImages && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.95)",
            zIndex: 1050
          }}
        >
          <div
            className="position-relative"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          >
            {/* Close Button */}
            <button
              className="btn btn-light position-absolute top-0 end-0 m-3"
              onClick={() => setSelectedProductImages(null)}
            >
              ✕
            </button>

            {/* Carousel Viewer */}
            <div className="d-flex align-items-center justify-content-center" style={{ height: "100%" }}>
              {/* Left Arrow */}
              <button
                className="btn btn-outline-light me-2"
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? selectedProductImages.length - 1 : prev - 1
                  )
                }
                style={{ fontSize: "2rem" }}
              >
                ‹
              </button>

              {/* Image */}
              <img
                src={selectedProductImages[currentImageIndex]}
                alt={`product-${currentImageIndex}`}
                style={{
                  maxWidth: "80vw",
                  maxHeight: "80vh",
                  borderRadius: "10px",
                  boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                  objectFit: "contain"
                }}
              />

              {/* Right Arrow */}
              <button
                className="btn btn-outline-light ms-2"
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === selectedProductImages.length - 1 ? 0 : prev + 1
                  )
                }
                style={{ fontSize: "2rem" }}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
