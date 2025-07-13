import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/contact")
      .then((res) => {
        if (res.data) setFormData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader
    try {
      await axios.put("http://localhost:8000/api/contact/update", formData);
      toast.success("Contact info updated!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update contact info.");
    } finally {
      setLoading(false); // Stop loader
    }
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
