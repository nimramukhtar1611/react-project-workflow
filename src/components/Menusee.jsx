import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Menusee = () => {
  const [dishes, setDishes] = useState([]);
  const [editDish, setEditDish] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [fileInputs, setFileInputs] = useState([0]);
  const [newImageUrls, setNewImageUrls] = useState([""]);
  const [newFiles, setNewFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchDishes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/removedishes");
      setDishes(res.data);
    } catch (error) {
      toast.error("Failed to fetch");
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/removedishes/${id}`);
      fetchDishes();
    } catch (err) {
      console.error("Delete Error:", err);
      toast.error("Failed to delete");
    }
  };

  const handleEdit = (dish) => {
    setEditDish(dish);
    setNewTitle(dish.title);
    setNewDesc(dish.desc);
    setNewPrice(dish.price);
    setPreviewImages(dish.images || []);
    setNewImageUrls([""]);
    setNewFiles([]);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newTitle);
      formData.append("desc", newDesc);
      formData.append("price", newPrice);

      previewImages.forEach((url) => {
        formData.append("existingImages", url);
      });

      newImageUrls.forEach((url) => {
        if (url.trim()) formData.append("imageUrls", url);
      });

      newFiles.forEach((file) => {
        if (file) formData.append("images", file);
      });

      await axios.put(
        `http://localhost:8000/api/removedishes/${editDish._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setShowModal(false);
      fetchDishes();
    } catch (error) {
      console.error("Update Error:", error);
      toast.error("Failed to update");
    }
  };

  const handleUrlChange = (index, value) => {
    const updated = [...newImageUrls];
    updated[index] = value;
    setNewImageUrls(updated);
  };

  const addMoreUrl = () => {
    setNewImageUrls([...newImageUrls, ""]);
  };

  const handleFileChange = (e, index) => {
    const filesArray = Array.from(e.target.files);
    const updatedFiles = [...newFiles];
    updatedFiles[index] = filesArray;
    setNewFiles(updatedFiles.flat());
  };

  const addMoreFileInputs = () => {
    setFileInputs([...fileInputs, fileInputs.length]);
  };

  const removePreviewImage = (url) => {
    setPreviewImages(previewImages.filter((img) => img !== url));
  };

  return (
    <div className="container py-4">
      <ToastContainer />
      <h2 style={{ color: "#E1AD01" }}>📋 All Categories</h2>
      <div className="row">
        {dishes.map((dish) => (
          <div className="col-md-3 col-sm-6 mb-4" key={dish._id}>
            <div className="card shadow-sm h-100" style={{ borderRadius: "15px" }}>
              {dish.images[0] && (
                <img
                  src={dish.images[0]}
                  className="card-img-top"
                  style={{
                    height: "160px",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                  alt="dish"
                />
              )}
              <div className="card-body p-3">
                <h5 className="card-title mb-1 text-truncate">{dish.title}</h5>
                <p className="text-muted small mb-2 text-truncate">{dish.desc}</p>
                <p className="fw-bold mb-2">Rs. {dish.price}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleEdit(dish)}
                  >
                    ✏️
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(dish._id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-warning">
                <h5 className="modal-title">Edit Category</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  className="form-control mb-2"
                  placeholder="Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                  className="form-control mb-2"
                  rows={3}
                  placeholder="Description"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                />
                <input
                  className="form-control mb-3"
                  placeholder="Price"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />

                <h6>Current Images:</h6>
                <div className="d-flex flex-wrap mb-3">
                  {previewImages.map((img, idx) => (
                    <div key={idx} className="position-relative me-2 mb-2">
                      <img
                        src={img}
                        alt="preview"
                        style={{
                          height: 70,
                          width: 70,
                          objectFit: "cover",
                          borderRadius: 5,
                        }}
                      />
                      <button
                        className="btn btn-sm btn-danger position-absolute top-0 end-0"
                        onClick={() => removePreviewImage(img)}
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>

                <h6>Add More Image URLs:</h6>
                {newImageUrls.map((url, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="form-control mb-2"
                    value={url}
                    placeholder="Paste image URL"
                    onChange={(e) => handleUrlChange(idx, e.target.value)}
                  />
                ))}
                <button
                  className="btn btn-outline-secondary btn-sm mb-3"
                  onClick={addMoreUrl}
                >
                  ➕ Add More URLs
                </button>

                <h6>Upload Images:</h6>
                {fileInputs.map((inputId, idx) => (
                  <input
                    key={inputId}
                    type="file"
                    multiple
                    accept="image/*"
                    className="form-control mb-2"
                    onChange={(e) => handleFileChange(e, idx)}
                  />
                ))}
                <button
                  className="btn btn-outline-secondary btn-sm mb-3"
                  onClick={addMoreFileInputs}
                >
                  ➕ Add More Files
                </button>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-warning" onClick={handleUpdate}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menusee;
