import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { toast } from "react-toastify";
import AppDataContext from './components/context/appState'
const AboutPage = () => {
  const {
    footerData,
    contactData,
    fetchFooterData,
    fetchContactData,
  } = useContext(AppDataContext);

  useEffect(() => {
    if (!footerData) fetchFooterData();
    if (!contactData) fetchContactData();
  }, [footerData, contactData]);

  const socialIcons = {
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
    youtube: <FaYoutube />,
  };

  if (!footerData || !contactData)
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

  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        padding: "40px 20px",
        wordWrap: "break-word",
        whiteSpace: "normal",
      }}
    >
      <div className="container">
        <h1
          className="mb-4 text-center"
          style={{ color: "#E1AD01", fontWeight: "700" }}
        >
          About Us
        </h1>

        <section className="mb-5">
          <h3 style={{ color: "#343a40" }}>{footerData.brand}</h3>
          <p className="lead" style={{ color: "#6c757d" }}>
            {footerData.description}
          </p>
        </section>

        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <h4 className="mb-3" style={{ color: "#343a40" }}>
              Quick Links
            </h4>
            <ul className="list-unstyled">
              {footerData.quickLinks?.map((link, idx) => (
                <li key={idx} className="mb-2">
                  🔗 {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h4 className="mb-3" style={{ color: "#343a40" }}>
              Opening Hours
            </h4>
            <ul className="list-unstyled">
              {footerData.openingHours?.map((item, idx) => (
                <li key={idx}>
                  ⏰ {item.day}: {item.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h4 className="mb-3" style={{ color: "#343a40" }}>
              Contact Info
            </h4>
            <p>
              <strong>Email:</strong> {contactData.email}
            </p>
            <p>
              <strong>Phone:</strong> {contactData.phone}
            </p>
            <p>
              <strong>Address:</strong> {contactData.address}
            </p>
          </div>
        </div>

        <section className="mb-5">
          <h4 className="mb-3" style={{ color: "#343a40" }}>
            Newsletter
          </h4>
          <p>{footerData.newsletterText}</p>
        </section>

        <section className="mb-5">
          <h4 className="mb-3" style={{ color: "#343a40" }}>
            Follow Us
          </h4>
          <div className="d-flex flex-wrap gap-2">
            {Object.entries(footerData.socialLinks || {}).map(
              ([platform, url]) => (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={platform}
                  className="btn btn-light border"
                  style={{ color: "#E1AD01", borderColor: "#dcdcdc" }}
                >
                  {socialIcons[platform.toLowerCase()] || platform}
                </a>
              )
            )}
          </div>
        </section>

        <footer className="text-center mt-5 pt-4 border-top">
          <p className="text-muted small">{footerData?.copyright}</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
