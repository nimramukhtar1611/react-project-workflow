import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

const Productsee = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [imageUrls, setImageUrls] = useState([""]);
  const [imageFiles, setImageFiles] = useState([]);
  const [fileInputs, setFileInputs] = useState([0]); 
  const [previewImages, setPreviewImages] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/removeproduct");
      setProducts(res.data);
    } catch {
      alert("Error fetching products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/removeproduct/${id}`);
      fetchProducts();
    } catch {
      toast.error("Failed to delete product");
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setNewTitle(product.title);
    setNewDesc(product.desc);
    setNewPrice(product.price);
    setPreviewImages(product.images || []);
    setImageUrls([""]);
    setImageFiles([]);
    setFileInputs([0]);
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

      imageUrls.forEach((url) => {
        if (url.trim()) formData.append("imageUrls", url);
      });

      // Append all files from all file inputs
      imageFiles.flat().forEach((file) => {
        formData.append("images", file);
      });

      await axios.put(
        `http://localhost:8000/api/removeproduct/${editProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setEditProduct(null);
      fetchProducts();
    } catch (err) {
      toast.error("Update failed");
    }
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

  const addMoreFileInputs = () => {
    setFileInputs([...fileInputs, fileInputs.length]);
  };

  const removePreviewImage = (url) => {
    setPreviewImages(previewImages.filter((img) => img !== url));
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4" style={{ color: "#E1AD01" }}>🛍️ View & Edit Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div className="card shadow-sm h-100">
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>{product.title}</h5>
                <p>{product.desc}</p>
                <p className="fw-bold">Price: Rs. {product.price}</p>
                <div className="d-flex flex-wrap gap-2">
                  {product.images?.map((img, i) => (
                    <img key={i} src={img} alt="preview" style={{
                      width: 60, height: 60, objectFit: "cover", borderRadius: "6px"
                    }} />
                  ))}
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-sm btn-warning" onClick={() => handleEdit(product)}>✏️ Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product._id)}>🗑️ Delete</button>
              </div>
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
                      <img src={img} alt="preview" style={{
                        height: 70, width: 70, objectFit: "cover", borderRadius: 5
                      }} />
                      <button className="btn btn-sm btn-danger position-absolute top-0 end-0" onClick={() => removePreviewImage(img)}>❌</button>
                    </div>
                  ))}
                </div>

                <h6>Add Image URLs:</h6>
                {imageUrls.map((url, idx) => (
                  <input key={idx} type="text" className="form-control mb-2" placeholder="Paste image URL" value={url} onChange={(e) => handleUrlChange(idx, e.target.value)} />
                ))}
                <button className="btn btn-outline-secondary btn-sm mb-3" onClick={addMoreUrl}>➕ Add More URLs</button>

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
                <button className="btn btn-success" onClick={handleUpdate}>💾 Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productsee;
