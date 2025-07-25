import React, { useState ,useContext} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AppDataContext from "./context/appState";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
const Menuedit = () => {
  const [form, setForm] = useState({ title: "", desc: "", price: "" });
  const [imageUrls, setImageUrls] = useState([""]);
  const [fileInputs, setFileInputs] = useState([null]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
const { addCategory } = useContext(AppDataContext);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUrlChange = (index, value) => {
    const updated = [...imageUrls];
    updated[index] = value;
    setImageUrls(updated);
  };

  const addMoreUrlField = () => {
    setImageUrls([...imageUrls, ""]);
  };

  const addMoreFileField = () => {
    setFileInputs([...fileInputs, null]);
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

  if (!form.title.trim()) return toast.error("Title is required!");
  if (!form.desc.trim()) return toast.error("Description is required!");
  if (!form.price.trim()) return toast.error("Price is required!");

  const hasValidImageUrl = imageUrls.some((url) => url.trim() !== "");
  const hasSelectedFile = selectedFiles.some((file) => file);

  if (!hasValidImageUrl && !hasSelectedFile) {
    return toast.error("At least one image is required!");
  }

  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("desc", form.desc);
  formData.append("price", form.price);
  if (form.metaTitle) formData.append("metaTitle", form.metaTitle);
  if (form.metaDescription) formData.append("metaDescription", form.metaDescription);

  imageUrls.forEach((url) => {
    if (url.trim()) formData.append("imageUrls", url);
  });

  selectedFiles.forEach((file) => {
    if (file) formData.append("images", file);
  });

  await addCategory(formData);

  setForm({ title: "", desc: "", price: "", metaTitle: "", metaDescription: "" });
  setImageUrls([""]);
  setFileInputs([null]);
  setSelectedFiles([]);
};


  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h2 style={{ color: "#E1AD01" }}>🛠️ Add New Category</h2>
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={form.title}
                onChange={handleFormChange}
                
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="desc"
                className="form-control"
                value={form.desc}
                onChange={handleFormChange}
                rows={3}
              />
            </div>

            {/* Price */}
            <div className="mb-3">
              <label className="form-label">Price Range</label>
              <input
                type="text"
                name="price"
                className="form-control"
                value={form.price}
                onChange={handleFormChange}
              />
            </div>
          <div className="mb-3">
          <label className="form-label">Meta Title</label>
          <input type="text" name="metaTitle" className="form-control" value={form.metaTitle} onChange={handleFormChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Meta Description</label>
          <textarea name="metaDescription" className="form-control" value={form.metaDescription} onChange={handleFormChange} rows={3} />
        </div>
            {/* File inputs */}
            <div className="mb-3">
              <label className="form-label">Upload Images from Device</label>
              {fileInputs.map((_, idx) => (
                <div key={idx} className="d-flex align-items-center mb-2">
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control me-2"
                    onChange={(e) => handleSingleFileChange(e, idx)}
                  />
                  {selectedFiles[idx] && (
                    <img
                      src={URL.createObjectURL(selectedFiles[idx])}
                      alt="preview"
                      style={{
                        height: 60,
                        width: 60,
                        objectFit: "cover",
                        borderRadius: 5,
                      }}
                    />
                  )}
                </div>
              ))}
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm mt-2"
                onClick={addMoreFileField}
              >
                ➕ Add More Images
              </button>
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
                Add Category
              </button>            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Menuedit;