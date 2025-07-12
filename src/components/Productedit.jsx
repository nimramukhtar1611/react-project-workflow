import React, { useState, useEffect } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
const Productedit = () => {
  const [form, setForm] = useState({ title: "", desc: "", price: "", category: "" });
  const [imageUrls, setImageUrls] = useState([""]);
  const [fileInputs, setFileInputs] = useState([null]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
const [fileInputRefs, setFileInputRefs] = useState([React.createRef()]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/dishes").then((res) => setCategories(res.data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUrlChange = (index, value) => {
    const updated = [...imageUrls];
    updated[index] = value;
    setImageUrls(updated);
  };
  const addMoreUrlField = () => setImageUrls([...imageUrls, ""]);

const addMoreFileField = () => {
  setFileInputs([...fileInputs, null]);
  setFileInputRefs([...fileInputRefs, React.createRef()]);
};

  const handleSingleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updated = [...selectedFiles];
      updated[index] = file;
      setSelectedFiles(updated);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("desc", form.desc);
    formData.append("price", form.price);
    formData.append("category", form.category);

    imageUrls.forEach((url) => {
      if (url.trim()) {
        formData.append("imageUrls", url);
      }
    });

    selectedFiles.forEach((file) => {
      if (file) {
        formData.append("images", file);
      }
    });

    try {
      await axios.post("http://localhost:8000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
            setSuccess("Product added successfully!");
 toast.success("Product added successfully!");
      setForm({ title: "", desc: "", price: "", category: "" });
      setImageUrls([""]);
      setFileInputs([null]);
      setSelectedFiles([]);

    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to add product");
    }
  };

  return (
    <div className="container py-4">
      <h2 style={{ color: "#E1AD01" }}>🛠️ Admin Panel: Add New Product</h2>
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label className="form-label">Product Title</label>
        <input name="title" value={form.title} onChange={handleChange} className="form-control mb-2" />

        <label className="form-label">Description</label>
        <textarea name="desc" value={form.desc} onChange={handleChange} className="form-control mb-2" />

        <label className="form-label">Price</label>
        <input name="price" value={form.price} onChange={handleChange} className="form-control mb-2" />

        <label className="form-label">Category</label>
        <select name="category" value={form.category} onChange={handleChange} className="form-control mb-3">
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.title}
            </option>
          ))}
        </select>

        {/* URL Inputs */}
        <label className="form-label">Image URLs</label>
        {imageUrls.map((url, idx) => (
          <div key={idx} className="d-flex align-items-center mb-2">
            <input
              type="text"
              className="form-control me-2"
              value={url}
              onChange={(e) => handleUrlChange(idx, e.target.value)}
              placeholder="Paste image URL"
            />
            {url && (
              <img
                src={url}
                alt="Preview"
                style={{ height: 60, width: 60, objectFit: "cover", borderRadius: 5 }}
              />
            )}
          </div>
        ))}
        <button type="button" onClick={addMoreUrlField} className="btn btn-outline-secondary btn-sm mb-3">
          ➕ Add More URLs
        </button>
<br />
        {/* File Uploads */}
        <label className="form-label">Upload Images from Device</label>
        {fileInputs.map((_, idx) => (
          <div key={idx} className="d-flex align-items-center mb-2">
            <input
              type="file"
              accept="image/*"
                 ref={fileInputRefs[idx]} 
              className="form-control me-2"
              onChange={(e) => handleSingleFileChange(e, idx)}
            />
            {selectedFiles[idx] && (
              <img
                src={URL.createObjectURL(selectedFiles[idx])}
                alt="preview"
                style={{ height: 60, width: 60, objectFit: "cover", borderRadius: 5 }}
              />
            )}
          </div>
        ))}
        <button type="button" onClick={addMoreFileField} className="btn btn-outline-secondary btn-sm mb-3">
          ➕ Add More Images
        </button>

        <button type="submit" className="btn w-100" style={{ backgroundColor: "#E1AD01", color: "#000" }}>
          Add Product
        </button>
      </form>
                <ToastContainer position="top-right" autoClose={3000} />
      
    </div>
  );
};

export default Productedit;
