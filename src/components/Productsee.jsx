import React, { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import AppDataContext from "./context/appState";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const Productsee = () => {
  const {
    allProducts,
    fetchAllProducts,
    updateProduct,
    deleteProduct,
    loading,
  } = useContext(AppDataContext);

  const [productToDelete, setProductToDelete] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [imageUrls, setImageUrls] = useState([""]);
  const [imageFiles, setImageFiles] = useState([]);
  const [fileInputs, setFileInputs] = useState([0]);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleEdit = (product) => {
    setEditProduct(product);
    setNewTitle(product.title);
    setNewDesc(product.desc);
    setNewPrice(product.price);
    setPreviewImages(Array.isArray(product.images) ? product.images : []);
    setImageUrls([""]);
    setImageFiles([]);
    setFileInputs([0]);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("desc", newDesc);
    formData.append("price", newPrice);

    previewImages.forEach((url) => formData.append("existingImages", url));
    imageUrls.forEach((url) => {
      if (url.trim()) formData.append("imageUrls", url);
    });
    imageFiles.flat().forEach((file) => formData.append("images", file));

    updateProduct(editProduct._id, formData, () => setEditProduct(null));
  };

  const handleDelete = () => {
    deleteProduct(productToDelete._id, () => setProductToDelete(null));
  };

  const addMoreUrl = () => setImageUrls([...imageUrls, ""]);
  const handleUrlChange = (index, value) => {
    const updated = [...imageUrls];
    updated[index] = value;
    setImageUrls(updated);
  };
  const handleFileChange = (e, index) => {
    const files = Array.from(e.target.files);
    const updatedFiles = [...imageFiles];
    updatedFiles[index] = files;
    setImageFiles(updatedFiles);
  };
  const addMoreFileInputs = () => setFileInputs([...fileInputs, fileInputs.length]);
  const removePreviewImage = (url) => setPreviewImages(previewImages.filter((img) => img !== url));

  return (
    <div className="container py-4">
      <ToastContainer />
      <h2 className="mb-4" style={{ color: "#E1AD01" }}>🛍️ View & Edit Products</h2>
      <div className="row">
        {allProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div className="card shadow-sm h-100">
              <img src={product.images?.[0]} alt={product.title} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h5>{product.title}</h5>
                <p>{product.desc}</p>
                <p className="fw-bold">Price: Rs. {product.price}</p>
                <div className="d-flex flex-wrap gap-2">
                  {product.images?.map((img, i) => (
                    <img key={i} src={img} alt="preview" style={{ width: 60, height: 60, objectFit: "cover", borderRadius: "6px" }} />
                  ))}
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-sm btn-warning" onClick={() => handleEdit(product)}>✏️ Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => setProductToDelete(product)}>🗑️ Delete</button>
              </div>

              {productToDelete && (
                <div className="modal show bg-dark d-block">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-danger text-white">
                        <h5 className="modal-title">Confirm Delete</h5>
                        <button className="btn-close" onClick={() => setProductToDelete(null)} />
                      </div>
                      <div className="modal-body">
                        <p>Are you sure you want to delete <strong>{productToDelete.title}</strong>?</p>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={() => setProductToDelete(null)}>Cancel</button>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {editProduct && (
        <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-warning text-white">
                <h5>Edit Product</h5>
                <button className="btn-close" onClick={() => setEditProduct(null)} />
              </div>
              <div className="modal-body">
                <input className="form-control mb-2" placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                <textarea className="form-control mb-2" placeholder="Description" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
                <input className="form-control mb-3" placeholder="Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />

                <h6>Current Images:</h6>
                <div className="d-flex flex-wrap mb-3">
                  {previewImages.map((img, idx) => (
                    <div key={idx} className="position-relative me-2 mb-2">
                      <img src={img} alt="preview" style={{ height: 70, width: 70, objectFit: "cover", borderRadius: 5 }} />
                      <button className="btn btn-sm btn-danger position-absolute top-0 end-0" onClick={() => removePreviewImage(img)}>❌</button>
                    </div>
                  ))}
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
                <button className="btn btn-outline-secondary btn-sm mb-3" onClick={addMoreFileInputs}>➕ Add More Files</button>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setEditProduct(null)}>Cancel</button>
                <button className="btn btn-success" onClick={handleUpdate} disabled={loading}>
                  {loading ? (
                    <><span className="spinner-border spinner-border-sm me-2" />Updating...</>
                  ) : <>Save Changes</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productsee;
