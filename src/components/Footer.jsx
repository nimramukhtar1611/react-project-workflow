import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

function Footer() {
  const [footer, setFooter] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/footer")
      .then((res) => setFooter(res.data))
      .catch((err) => console.log(err),toast.error("Failed to load footer info")
);

    axios.get("http://localhost:8000/api/contact")
      .then((res) => setContact(res.data))
      .catch((err) => console.log(err),toast.error("Failed to load footer info"));
  }, []);

  if (!footer?.socialLinks) return null;

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 style={{ color: "#E1AD01", fontFamily: "'Playfair Display', serif" }}>{footer.brand}</h4>
            <p style={{ color: "#dcdcdc", fontFamily: "'Poppins', Arial, sans-serif" }}>{footer.description}</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h5>
            <ul className="list-unstyled">
              {footer.quickLinks?.map((link, index) => (
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
              {footer.openingHours?.map((item, index) => (
                <li key={index} style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>
                  {item.day}: {item.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            {contact ? (
              <>
                <p style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>Email: {contact.email}</p>
                <p style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>Phone: {contact.phone}</p>
                <p style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>Address: {contact.address}</p>
              </>
            ) : (
              <p style={{ color: "#dcdcdc", fontFamily: "'Playfair Display', serif" }}>Contact info</p>
            )}
          <div className="d-flex gap-3 mt-2">
  {footer.socialLinks.instagram && (
    <a href={footer.socialLinks.instagram} target="_blank" rel="noreferrer" style={{ color: "white" }}>
      <FaInstagram size={24} />
    </a>
  )}
  {footer.socialLinks.facebook && (
    <a href={footer.socialLinks.facebook} target="_blank" rel="noreferrer" style={{ color: "white" }}>
      <FaFacebook size={24} />
    </a>
  )}
  {footer.socialLinks.twitter && (
    <a href={footer.socialLinks.twitter} target="_blank" rel="noreferrer" style={{ color: "white" }}>
      <FaTwitter size={24} />
    </a>
  )}
  {footer.socialLinks.youtube && (
    <a href={footer.socialLinks.youtube} target="_blank" rel="noreferrer" style={{ color: "white" }}>
      <FaYoutube size={24} />
    </a>
  )}
</div>

          </div>
        </div>

        <hr className="border-secondary" />
        <div className="text-center">
          <p className="mb-0">{footer?.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
