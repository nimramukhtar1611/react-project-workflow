import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AppDataContext from "./context/appState";

const Menusee = () => {
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newmetatitle, setnewmetatitle] = useState("");
  const [newmetadescription, setnewmetadescription] = useState("");
  const [fileInputs, setFileInputs] = useState([0]);
  const [newImageUrls, setNewImageUrls] = useState([""]);
  const [newFiles, setNewFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);

  const {
    dishes,
    fetchDishes,
    deleteDish,
    updateDish,
    setEditDish,
    editDish,
  } = useContext(AppDataContext);

  useEffect(() => {
    fetchDishes();
  }, []);

  const handleEdit = (dish) => {
    setEditDish(dish);
    setNewTitle(dish.title);
    setnewmetatitle(dish.metaTitle);
    setnewmetadescription(dish.metaDescription);
    setNewDesc(dish.desc);
    setNewPrice(dish.price);
    setPreviewImages(Array.isArray(dish.images) ? dish.images : []);
    setNewImageUrls([""]);
    setNewFiles([]);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    setLoadingUpdate(true);
    try {
      const formData = new FormData();
      formData.append("title", newTitle);
      formData.append("desc", newDesc);
      formData.append("price", newPrice);
      formData.append("metaTitle", newmetatitle);
      formData.append("metaDescription", newmetadescription);

      previewImages.forEach((url) => formData.append("existingImages", url));
      newImageUrls.forEach((url) => url.trim() && formData.append("imageUrls", url));
      newFiles.forEach((file) => file && formData.append("images", file));

      await updateDish(editDish._id, formData, () => {
        setShowModal(false);
        setLoadingUpdate(false);
      });
    } catch (error) {
      setLoadingUpdate(false);
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
                    onClick={() => {
                      setSelectedDeleteId(dish._id);
                      setShowDeleteModal(true);
                    }}
                  >
                    🗑️
                  </button>
                </div>

                {showDeleteModal && (
                  <div className="modal show d-block bg-dark" tabIndex="-1">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header bg-danger text-white">
                          <h5 className="modal-title">Confirm Delete</h5>
                          <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={() => setShowDeleteModal(false)}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>Are you sure you want to delete this product?</p>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary"
                            onClick={() => setShowDeleteModal(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={async () => {
                              await deleteDish(selectedDeleteId);
                              setShowDeleteModal(false);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
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
                <h5 style={{ color: "#E1AD01" }}> Title</h5>
                <input
                  className="form-control mb-2"
                  placeholder="Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <h5 style={{ color: "#E1AD01" }}> Description</h5>
                <textarea
                  className="form-control mb-2"
                  rows={2}
                  placeholder="Description"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                />
                <h5 style={{ color: "#E1AD01" }}> Price</h5>
                <input
                  className="form-control mb-3"
                  placeholder="Price"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
                <h5 style={{ color: "#E1AD01" }}> Meta Title</h5>
                <input
                  className="form-control mb-3"
                  placeholder="Meta Title"
                  value={newmetatitle}
                  onChange={(e) => setnewmetatitle(e.target.value)}
                />
                <h5 style={{ color: "#E1AD01" }}> Meta Description</h5>
                <textarea
                  className="form-control mb-2"
                  rows={2}
                  placeholder="Meta Description"
                  value={newmetadescription}
                  onChange={(e) => setnewmetadescription(e.target.value)}
                />

                <h6>Current Images:</h6>
                <div className="d-flex flex-wrap mb-3">
                  {previewImages.length > 0 ? (
                    previewImages.map((img, idx) => (
                      <div key={idx} className="position-relative me-2 mb-2">
                        <img
                          src={img}
                          alt={`preview-${idx}`}
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
                    ))
                  ) : (
                    <p className="text-muted">No current images</p>
                  )}
                </div>

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
                <button className="btn btn-warning" onClick={handleUpdate} disabled={loadingUpdate}>
                  {loadingUpdate ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Updating...
                    </>
                  ) : (
                    "Save Changes"
                  )}
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
