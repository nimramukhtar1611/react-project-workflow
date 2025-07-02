import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Menuedit = () => {
  const [form, setForm] = useState({ title: "", desc: "", price: "", image: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    try {
      await axios.post("http://localhost:8000/api/dishes", form);
      setSuccess("Category added successfully!");
      setForm({ title: "", desc: "", price: "", image: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add category");
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h2 style={{ color: "#E1AD01", marginBottom: "20px" }}>🛠️ Admin Panel: Add New Category</h2>
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Category Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="e.g. Appetizers"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="desc"
                value={form.desc}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Enter category description"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price Range</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
                placeholder="e.g. $10 "
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={form.image}
                onChange={handleChange}
                required
                placeholder="Paste image URL"
              />
              {form.image && (
                <img
                  src={form.image}
                  alt="Preview"
                  className="mt-3 rounded shadow"
                  style={{ maxWidth: "100%", maxHeight: "160px", objectFit: "cover" }}
                />
              )}
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: "#E1AD01", color: "#000" }}
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Menuedit;
