// Productedit.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Productedit = () => {
  const [form, setForm] = useState({ title: "", desc: "", image: "", category: "" });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/dishes").then((res) => setCategories(res.data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/products", form);
      alert("Product added!");
      setForm({ title: "", desc: "", image: "", category: "" });
    } catch (err) {
      alert("Error adding product");
    }
  };

  return (
    <div className="container py-4">
                <h2 style={{ color: "#E1AD01", marginBottom: "20px" }}>🛠️ Admin Panel: Add New Product</h2>
      <form onSubmit={handleSubmit}>
                      <label className="form-label">Post Title</label>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="form-control mb-2" />
                              <label className="form-label">Post Description</label>

        <textarea name="desc" value={form.desc} onChange={handleChange} placeholder="Description" className="form-control mb-2" />
                              <label className="form-label">Post Image Url</label>

        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="form-control mb-2" />
                              <label className="form-label">Select Category</label>

        <select name="category" value={form.category} onChange={handleChange} className="form-control mb-3">
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.title}
            </option>
          ))}
        </select>
        <button className="btn btn-warning">Add Product</button>
      </form>
    </div>
  );
};

export default Productedit;
