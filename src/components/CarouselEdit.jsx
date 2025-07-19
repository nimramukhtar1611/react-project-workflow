import React, { useContext, useState } from "react";
import AppDataContext from "./context/appState";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselEdit = () => {
  const {
    carouselImages,
    deleteCarouselImage,
    uploadCarouselImages,
  } = useContext(AppDataContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([null]);

  const handleFileChange = (e, idx) => {
    const file = e.target.files[0];
    if (file) {
      const updated = [...selectedFiles];
      updated[idx] = file;
      setSelectedFiles(updated);
    }
  };

  const addMoreFile = () => setSelectedFiles([...selectedFiles, null]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validFiles = selectedFiles.filter((file) => file !== null);
    if (validFiles.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }

    await uploadCarouselImages(validFiles);
    setShowModal(false);
    setSelectedFiles([null]);
  };

  return (
    <div className="container py-4">
      <h2 style={{ color: "#E1AD01" }}>Edit Home Carousel</h2>

      {/* View Existing Images with Delete */}
      <div className="d-flex flex-wrap gap-4 mt-4 mb-4">
        {carouselImages.map((img, idx) => (
          <div key={idx} className="position-relative">
            <img src={img} alt="carousel" height={100} className="rounded" />
            <button
              onClick={() => deleteCarouselImage(img)}
              className="btn btn-sm btn-danger position-absolute top-0 end-0"
              style={{ transform: "translate(50%, -50%)" }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      <Button
        style={{ backgroundColor: "#E1AD01", borderColor: "#E1AD01", color: "#000" }}
        onClick={() => setShowModal(true)}
      >
        Edit / Add Images
      </Button>

      {/* Modal for Adding Images */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🖼️ Edit Carousel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Upload Files</label>
              {selectedFiles.map((file, idx) => (
                <div key={idx} className="d-flex align-items-center mb-2">
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control me-2"
                    onChange={(e) => handleFileChange(e, idx)}
                  />
                  {file instanceof File && (
                    <img src={URL.createObjectURL(file)} height={50} alt="preview" />
                  )}
                </div>
              ))}
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={addMoreFile}
              >
                ➕ Add More Files
              </button>
            </div>

            <button className="btn btn-warning w-100">💾 Save Changes</button>
          </form>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default CarouselEdit;
