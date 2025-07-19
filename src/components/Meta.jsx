import React, { useContext, useState, useEffect } from "react";
import AppDataContext from "./context/appState";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";

const Meta = () => {
  const { metaData, updateMetaData, setMetaData } = useContext(AppDataContext);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetaData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await updateMetaData(metaData);
    setLoading(false);
  };

  return (
    <div className="container py-4">
      <ToastContainer />
      <div className="row">
        <div className="col-12">
          <h2 style={{ color: "#E1AD01", marginBottom: "20px" }}>
            🛠️ Admin Panel: Update Home Meta Info
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Meta Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={metaData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Meta Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="4"
                value={metaData.description}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "#E1AD01", color: "#000" }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Updating...
                </>
              ) : (
                "Update Meta"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Meta;
