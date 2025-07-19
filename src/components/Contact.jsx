import React, { useContext, useEffect, useState } from "react";
import AppDataContext from "./context/appState";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    contactData,
    setContactData,
    fetchContactData,
    loading,
        updateContactData,
    setLoading,
  } = useContext(AppDataContext);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
  });

  // Load contact data into form when available
  useEffect(() => {
    if (contactData) {
      setFormData(contactData);
    }
  }, [contactData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateContactData(formData);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h2 style={{ color: "#E1AD01", marginBottom: "20px" }}>
            🛠️ Admin Panel: Contact Info
          </h2>
          <form onSubmit={handleSubmit} className="p-4 rounded">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                className="form-control"
                required
                disabled={loading}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                className="form-control"
                required
                disabled={loading}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                className="form-control"
                required
                disabled={loading}
              />
            </div>

            {loading ? (
              <div className="text-center my-3">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="btn w-100"
                style={{ backgroundColor: "#E1AD01", color: "#000" }}
              >
                Update Contact
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
