import { useContext } from 'react';
import AppDataContext from './context/appState';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const { footerData, contactData } = useContext(AppDataContext);

  if (!footerData?.socialLinks) return null;

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 style={{ color: "#E1AD01", fontFamily: "'Playfair Display', serif" }}>{footerData.brand}</h4>
            <p style={{ color: "#dcdcdc", fontFamily: "'Poppins', Arial, sans-serif" }}>{footerData.description}</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h5>
            <ul className="list-unstyled">
              {footerData.quickLinks?.map((link, index) => (
                <li key={index}>
                  <a href="#" style={{ color: "#E1AD01", fontFamily: "'Playfair Display', serif" }} className="text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-md-3 mb-4">
            <h5 style={{ fontFamily: "'Playfair Display', serif" }}>Opening Hours</h5>
            <ul className="list-unstyled">
              {footerData.openingHours?.map((item, index) => (
                <li key={index} style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>
                  {item.day}: {item.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            {contactData ? (
              <>
                <p style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>Email: {contactData.email}</p>
                <p style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>Phone: {contactData.phone}</p>
                <p style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>Address: {contactData.address}</p>
              </>
            ) : (
              <p style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>Contact info</p>
            )}
            <div className="d-flex gap-3 mt-2">
              {footerData.socialLinks.instagram && (
                <a href={footerData.socialLinks.instagram} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                  <FaInstagram size={24} />
                </a>
              )}
              {footerData.socialLinks.facebook && (
                <a href={footerData.socialLinks.facebook} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                  <FaFacebook size={24} />
                </a>
              )}
              {footerData.socialLinks.twitter && (
                <a href={footerData.socialLinks.twitter} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                  <FaTwitter size={24} />
                </a>
              )}
              {footerData.socialLinks.youtube && (
                <a href={footerData.socialLinks.youtube} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                  <FaYoutube size={24} />
                </a>
              )}
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <div className="text-center">
          <p className="mb-0">{footerData?.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
