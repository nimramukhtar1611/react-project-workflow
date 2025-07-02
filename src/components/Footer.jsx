 import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Style.css';

const Footer = () => {
  const [footer, setFooter] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/footer')
      .then(res => res.json())
      .then(data => setFooter(data));

    fetch('http://localhost:8000/api/contact')
      .then(res => res.json())
      .then(data => setContact(data));
  }, []);

  if (!footer || !contact) return null;

  return (
    <footer style={{ background: "#191919", color: "#fff", fontFamily: "inherit", fontSize: "15px", padding: "0", margin: "0", borderTop: "4px solid #fff" }}>
      <div className="container-fluid px-0">
        <div className="row justify-content-center text-start px-0 mx-0" style={{ padding: "40px 0 20px 0" }}>
          <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0 d-flex flex-column align-items-start ps-4 ps-md-5">
            <div>
              <span style={{ color: "#f2b233", fontWeight: "bold", fontSize: "24px", letterSpacing: "1px", fontFamily: "serif" }}>
                {footer.brand}
              </span>
            </div>
            <div className="mt-3" style={{ maxWidth: "340px" }}>
              <span style={{ color: "#b8b8b8" }}>{footer.description}</span>
            </div>
            <div className="mt-3" style={{ color: "#b8b8b8", fontSize: 15 }}>
              <div><strong>Email:</strong> {contact.email}</div>
              <div><strong>Phone:</strong> {contact.phone}</div>
              <div><strong>Address:</strong> {contact.address}</div>
            </div>
            <div className="mt-3 d-flex gap-3">
              <a href={footer.socialLinks.instagram} aria-label="Instagram" style={{ color: "#fff", fontSize: "18px" }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href={footer.socialLinks.facebook} aria-label="Facebook" style={{ color: "#fff", fontSize: "18px" }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href={footer.socialLinks.twitter} aria-label="X" style={{ color: "#fff", fontSize: "18px" }}>
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href={footer.socialLinks.youtube} aria-label="YouTube" style={{ color: "#fff", fontSize: "18px" }}>
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links & Hours */}
          <div className="col-12 col-md-8 col-lg-6 d-flex flex-wrap">
            <div className="col-6 col-md-4 mb-4 mb-md-0">
              <div style={{ fontWeight: "bold", color: "#fff", marginBottom: 12 }}>Quick Links</div>
              <ul className="list-unstyled" style={{ color: "#b8b8b8", fontSize: 15 }}>
                {footer.quickLinks?.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a href="#" style={{ color: "#b8b8b8", textDecoration: "none" }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6 col-md-5 mb-4 mb-md-0">
              <div style={{ fontWeight: "bold", color: "#fff", marginBottom: 12 }}>Opening Hours</div>
              <ul className="list-unstyled" style={{ color: "#b8b8b8", fontSize: 15 }}>
                {footer.openingHours?.map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex justify-content-between">
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-md-3 mt-3 mt-md-0">
              <div style={{ fontWeight: "bold", color: "#fff", marginBottom: 12 }}>Stay Inspired</div>
              <div style={{ color: "#b8b8b8", fontSize: 15, marginBottom: 10 }}>
                {footer.newsletterText}
              </div>
              <form className="d-flex flex-column">
                <input type="email" className="footer-email-input form-control mb-2" placeholder="Your email address" style={{ background: "#191919", color: "#fff", border: "1px solid #fff", borderRadius: "20px", fontSize: 15 }} />
                <button type="submit" className="btn" style={{ background: "#f2b233", color: "#191919", borderRadius: "20px", fontWeight: "bold", fontSize: 15 }}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "2px solid #666" }}></div>
        <div className="row justify-content-between align-items-center px-0 mx-0" style={{ padding: "14px 0 10px 0" }}>
          <div className="col-12 col-sm-6 ps-4 ps-md-5" style={{ color: "#b8b8b8", fontSize: 13 }}>
            {footer.copyright}
          </div>
          <div className="col-12 col-sm-6 text-end pe-4 pe-md-5" style={{ color: "#b8b8b8", fontSize: 13 }}>
            <a href="#" style={{ color: "#b8b8b8", textDecoration: "none" }}>
              Back to top <span style={{ fontSize: 15, position: "relative", top: "2px" }}>⌃</span>
            </a>
          </div>
        </div>
      </div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    </footer>
  );
};

export default Footer;