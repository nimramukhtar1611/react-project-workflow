import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const CarouselEdit = () => {
  const [imageUrls, setImageUrls] = useState([""]);
  const [selectedFiles, setSelectedFiles] = useState([null]);
  const [fileInputs, setFileInputs] = useState([null]);
  const [fileInputRefs, setFileInputRefs] = useState([React.createRef()]);
  

  useEffect(() => {
    axios.get("http://localhost:8000/api/home").then((res) => {
      if (res.data?.carouselImages?.length) {
        setImageUrls(res.data.carouselImages);
      }
    });
  }, []);

  const handleUrlChange = (idx, val) => {
    const updated = [...imageUrls];
    updated[idx] = val;
    setImageUrls(updated);
  };

  const handleFileChange = (e, idx) => {
    const file = e.target.files[0];
    if (file) {
      const updated = [...selectedFiles];
      updated[idx] = file;
      setSelectedFiles(updated);
    }
  };

  const addMoreUrl = () => setImageUrls([...imageUrls, ""]);
  const addMoreFile = () => {
    setFileInputs([...fileInputs, null]);
      setFileInputRefs([...fileInputRefs, React.createRef()]);
    
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();

  imageUrls.forEach((url) => {
    if (url.trim()) formData.append("imageUrls", url);
  });

  selectedFiles.forEach((file) => {
    if (file) formData.append("images", file);
  });

  try {
    await axios.post("http://localhost:8000/api/home", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    toast.success("Carousel updated!");

    // ✅ Clear inputs and states
    setImageUrls([""]);
    setSelectedFiles([null]);
    setFileInputs([null]);
    fileInputRefs.forEach(ref => {
      if (ref.current) ref.current.value = "";
    });
    setFileInputRefs([React.createRef()]);
  } catch (err) {
    toast.error("Update failed!");
  }
};

  return (
    <div className="container py-4">
      <h2 style={{ color: "#E1AD01" }}> 🛠️ Update Carousel</h2>
      <form onSubmit={handleSubmit}>
        {/* Image URL Fields */}
        <div className="mb-3">
          <label className="form-label">Image URLs</label>
          {imageUrls.map((url, idx) => (
            <div key={idx} className="d-flex align-items-center mb-2">
              <input
                type="text"
                className="form-control me-2"
                value={url}
                onChange={(e) => handleUrlChange(idx, e.target.value)}
              />
              {url && <img src={url} alt="preview" height={50} />}
            </div>
          ))}
          <button type="button" className="btn btn-outline-secondary btn-sm mt-2" onClick={addMoreUrl}>
            ➕ Add More URLs
          </button>
        </div>

        {/* File Upload Fields */}
        <div className="mb-3">
          <label className="form-label">Upload Images</label>
          {fileInputs.map((_, idx) => (
            <div key={idx} className="d-flex align-items-center mb-2">
              <input
                type="file"
                                 ref={fileInputRefs[idx]} 

                className="form-control me-2"
                accept="image/*"
                onChange={(e) => handleFileChange(e, idx)}
              />
              {selectedFiles[idx] && (
                <img src={URL.createObjectURL(selectedFiles[idx])} height={50} alt="preview" />
              )}
            </div>
          ))}
          <button type="button" className="btn btn-outline-secondary btn-sm mt-2" onClick={addMoreFile}>
            ➕ Add More Files
          </button>
        </div>

        <button className="btn" style={{ background: "#E1AD01", color: "#000" }}>
          Save Carousel
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CarouselEdit;
