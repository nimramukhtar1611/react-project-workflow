import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
const defaultFooter = {
  brand: "",
  description: "",
  quickLinks: [],
  openingHours: [{ day: "", time: "" }],
  newsletterText: "",
  copyright: "",
  socialLinks: {
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: ""
  }
};

const Footeredit = () => {
  const [form, setForm] = useState(defaultFooter);
  const [original, setOriginal] = useState(defaultFooter);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/footer")
      .then((res) => {
        setForm({ ...defaultFooter, ...res.data });
        setOriginal({ ...defaultFooter, ...res.data });
      })
      .catch(() => setError("Failed to load footer data."));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuickLinks = (e) => {
    setForm((prev) => ({
      ...prev,
      quickLinks: e.target.value.split(",").map((str) => str.trim())
    }));
  };

  const handleOpeningHourChange = (idx, field, value) => {
    setForm((prev) => ({
      ...prev,
      openingHours: prev.openingHours.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      )
    }));
  };

  const addOpeningHour = () => {
    setForm((prev) => ({
      ...prev,
      openingHours: [...(prev.openingHours || []), { day: "", time: "" }]
    }));
  };

  const removeOpeningHour = (idx) => {
    setForm((prev) => ({
      ...prev,
      openingHours: prev.openingHours.filter((_, i) => i !== idx)
    }));
  };

  const handleSocialLinkChange = (platform, value) => {
    setForm((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
      setLoading(true);
    try {
      const res = await axios.put(
        "http://localhost:8000/api/footer",
        { ...original, ...form }
      );
      setForm(res.data);
      setOriginal(res.data);
      toast.success("Footer updated successfully!");
    } catch (err) {
    toast.error  ("Failed to update. Please try again.");
    }finally {
    setLoading(false); 
  }
  };

  if (!form) return null;

   return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h2 style={{ color: "#E1AD01", marginBottom: "20px" }}>
            🛠️ Admin Panel: Edit Footer & About
          </h2>
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Brand</label>
              <input
                name="brand"
                value={form.brand || ""}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                value={form.description || ""}
                onChange={handleChange}
                className="form-control"
                rows={2}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Quick Links (comma separated)</label>
              <input
                name="quickLinks"
                value={form.quickLinks?.join(", ") || ""}
                onChange={handleQuickLinks}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Opening Hours</label>
              {form.openingHours?.map((item, idx) => (
                <div key={idx} className="row gx-2 align-items-center mb-2">
                  <div className="col-5">
                    <input
                      placeholder="Day"
                      value={item.day}
                      onChange={(e) =>
                        handleOpeningHourChange(idx, "day", e.target.value)
                      }
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-5">
                    <input
                      placeholder="Time"
                      value={item.time}
                      onChange={(e) =>
                        handleOpeningHourChange(idx, "time", e.target.value)
                      }
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <button
                      type="button"
                      onClick={() => removeOpeningHour(idx)}
                      className="btn btn-danger btn-sm"
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addOpeningHour}
                className="btn btn-sm mt-2 w-100"
                style={{ backgroundColor: "#E1AD01", color: "#fff" }}
              >
                Add Opening Hour
              </button>
            </div>
            <div className="mb-3">
              <label className="form-label">Newsletter Text</label>
              <input
                name="newsletterText"
                value={form.newsletterText || ""}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Copyright</label>
              <input
                name="copyright"
                value={form.copyright || ""}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Social Links</label>
              <div className="row gx-2">
                {["instagram", "facebook", "twitter", "youtube"].map((platform) => (
                  <div className="col-12 col-sm-6 mb-2" key={platform}>
                    <input
                      placeholder={
                        platform.charAt(0).toUpperCase() + platform.slice(1)
                      }
                      value={form.socialLinks?.[platform] || ""}
                      onChange={(e) =>
                        handleSocialLinkChange(platform, e.target.value)
                      }
                      className="form-control"
                    />
                  </div>
                ))}
              </div>
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
    Update Footer
  </button>
)}

          </form>
        </div>
      </div>
    </div>
  );
};


export default Footeredit;