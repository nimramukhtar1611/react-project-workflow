import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Style.css'
const Footer = () => {
  return (
    <footer
      style={{
        background: "#191919",
        color: "#fff",
        fontFamily: "inherit",
        fontSize: "15px",
        padding: "0",
        margin: "0",
        borderTop: "4px solid #fff",
      }}
    >
      {/* Top Section */}
      <div className="container-fluid px-0">
        <div className="row justify-content-center text-start px-0 mx-0" style={{ padding: "40px 0 20px 0" }}>
          {/* Left - Brand and Description */}
          <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0 d-flex flex-column align-items-start ps-4 ps-md-5">
            <div>
              <span
                style={{
                  color: "#f2b233",
                  fontWeight: "bold",
                  fontSize: "24px",
                  letterSpacing: "1px",
                  fontFamily: "serif",
                }}
              >
                AURUM
              </span>
            </div>
            <div className="mt-3" style={{ maxWidth: "340px" }}>
              <span style={{ color: "#b8b8b8" }}>
                Experience exquisite dining in a modern yet classic atmosphere. Our chefs create memorable culinary journeys with fresh, local ingredients.
              </span>
            </div>
            <div className="mt-3 d-flex gap-3">
              {/* Social Icons */}
              <a href="#" aria-label="Instagram" style={{ color: "#fff", fontSize: "18px" }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook" style={{ color: "#fff", fontSize: "18px" }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="X" style={{ color: "#fff", fontSize: "18px" }}>
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" aria-label="YouTube" style={{ color: "#fff", fontSize: "18px" }}>
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          {/* Middle - Quick Links & Hours */}
          <div className="col-12 col-md-8 col-lg-6 d-flex flex-wrap">
            {/* Quick Links */}
            <div className="col-6 col-md-4 mb-4 mb-md-0">
              <div style={{ fontWeight: "bold", color: "#fff", marginBottom: 12 }}>Quick Links</div>
              <ul className="list-unstyled" style={{ color: "#b8b8b8", fontSize: 15 }}>
                <li className="mb-2"><a href="#" style={{ color: "#b8b8b8", textDecoration: "none" }}>Home</a></li>
                <li className="mb-2"><a href="#" style={{ color: "#b8b8b8", textDecoration: "none" }}>Our Story</a></li>
                <li className="mb-2"><a href="#" style={{ color: "#b8b8b8", textDecoration: "none" }}>Menu</a></li>
                <li className="mb-2"><a href="#" style={{ color: "#b8b8b8", textDecoration: "none" }}>Gallery</a></li>
                <li className="mb-2"><a href="#" style={{ color: "#b8b8b8", textDecoration: "none" }}>Private Event</a></li>
                <li><a href="#" style={{ color: "#b8b8b8", textDecoration: "none" }}>Reservations</a></li>
              </ul>
            </div>
            {/* Opening Hours */}
            <div className="col-6 col-md-5 mb-4 mb-md-0">
              <div style={{ fontWeight: "bold", color: "#fff", marginBottom: 12 }}>Opening Hours</div>
              <ul className="list-unstyled" style={{ color: "#b8b8b8", fontSize: 15 }}>
                <li className="mb-2 d-flex justify-content-between">
                  <span>Monday - Thursday</span>
                  <span>6:00 PM – 10:00 PM</span>
                </li>
                <li className="mb-2 d-flex justify-content-between">
                  <span>Friday - Saturday</span>
                  <span>6:00 PM – 11:00 PM</span>
                </li>
                <li className="mb-2 d-flex justify-content-between">
                  <span>Sunday</span>
                  <span>12:00 PM – 9:00 PM</span>
                </li>
                <li className="d-flex justify-content-between" style={{ fontStyle: "italic", fontSize: 13 }}>
                  <span>Closed on major holidays</span>
                  <span></span>
                </li>
              </ul>
            </div>
            {/* Newsletter */}
            <div className="col-12 col-md-3 mt-3 mt-md-0">
              <div style={{ fontWeight: "bold", color: "#fff", marginBottom: 12 }}>Stay Inspired</div>
              <div style={{ color: "#b8b8b8", fontSize: 15, marginBottom: 10 }}>
                Subscribe to our newsletter for special events, new menu items, and exclusive offers.
              </div>
              <form className="d-flex flex-column">
                <input
          type="email"
          className="footer-email-input   form-control mb-2 "
          placeholder="Your email address"
          style={{
            background: "#191919",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "20px",
            fontSize: 15,
          }}
        />
                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: "#f2b233",
                    color: "#191919",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div style={{ borderTop: "2px solid #666", margin: "0 0 0 0" }}></div>
        {/* Bottom Section */}
        <div className="row justify-content-between align-items-center px-0 mx-0" style={{ padding: "14px 0 10px 0" }}>
          <div className="col-12 col-sm-6 ps-4 ps-md-5" style={{ color: "#b8b8b8", fontSize: 13 }}>
            © 2025 AURUM. All rights reserved.
          </div>
          <div className="col-12 col-sm-6 text-end pe-4 pe-md-5" style={{ color: "#b8b8b8", fontSize: 13 }}>
            <a href="#" style={{ color: "#b8b8b8", textDecoration: "none" }}>
              Back to top <span style={{ fontSize: 15, position: "relative", top: "2px" }}>⌃</span>
            </a>
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
    </footer>
  );
};

export default Footer;