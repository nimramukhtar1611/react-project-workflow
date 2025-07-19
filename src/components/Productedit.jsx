import React, { useState, useContext,useEffect } from "react";
import AppDataContext from "./context/appState";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Productedit = () => {
  const {
    allCategories,
    fetchAllCategories,
    addProduct,
    loading,
  } = useContext(AppDataContext);

  const [form, setForm] = useState({ title: "", desc: "", price: "", category: "" });
  const [imageUrls, setImageUrls] = useState([""]);
  const [fileInputs, setFileInputs] = useState([null]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileInputRefs, setFileInputRefs] = useState([React.createRef()]);

  useEffect(() => {
    fetchAllCategories();
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

    // Validation
    if (!form.title.trim()) return toast.error("Title is required!");
    if (!form.desc.trim()) return toast.error("Description is required!");
    if (!form.price.trim()) return toast.error("Price is required!");
    if (!form.category.trim()) return toast.error("Category is required!");

    const hasValidImageUrl = imageUrls.some((url) => url.trim() !== "");
    const hasSelectedFile = selectedFiles.some((file) => file);

    if (!hasValidImageUrl && !hasSelectedFile) {
      return toast.error("At least one image (URL or file) is required!");
    }

    const resetForm = () => {
      setForm({ title: "", desc: "", price: "", category: "" });
      setImageUrls([""]);
      setFileInputs([null]);
      setSelectedFiles([]);
    };

    addProduct(form, imageUrls, selectedFiles, resetForm);
  };

  return (
    <div className="container py-4">
      <h2 style={{ color: "#E1AD01" }}>🛠️ Admin Panel: Add New Product</h2>
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
          {allCategories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.title}
            </option>
          ))}
        </select>

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
            Add Product
          </button>
        )}
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Productedit;
