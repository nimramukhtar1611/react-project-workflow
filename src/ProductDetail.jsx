import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
import AppContext from './components/context/appContext'
const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);
const { updateCart , cartItem } = useContext(AppContext); 
const quantity = cartItem?.product?._id === id ? cartItem.quantity : 1;
useEffect(() => {
  if (product) {
    updateCart(product, quantity);
  }
}, [quantity, product]);


  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        const found = res.data.find(p => p._id === id);
        console.log("Product found:", found);
      
        setProduct(found);
      })
      .catch(err => console.error(err),
    toast.error("failed to get product"));
  }, [id]);

 const increaseQty = () => {
  if (product) updateCart(product, quantity + 1);
};
const decreaseQty = () => {
  if (product && quantity > 1) updateCart(product, quantity - 1);
};


  const handleCheckout = () => {
    if (!product) return;

    history.push("/checkout", {
      title: product.title,
      quantity,
      price: product.price, 
    });
  };

  if (!product) {
    return (
      <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f7fa",
      }}
    >
      <div
        style={{
          color: "#E1AD01",
          fontWeight: "bold",
          letterSpacing: "3px",
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontFamily: "'Playfair Display', serif",
          textAlign: "center",
          textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
        }}
      >
        AURUM...
      </div>
    </div>
    );
  }

  return (
    <div className="container py-5" style={{ fontFamily: "'Poppins', sans-serif", height: "100vh" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/500"}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold" style={{ color: "#333", fontFamily: "'Playfair Display', serif", fontSize: "300%" }}>
            {product.title}
          </h2>
          <p className="mt-3 text-muted">{product.desc}</p>

          <h4 className="text-warning fw-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Price: Rs {product.price}
          </h4>

          {/* Quantity Control + Checkout */}
          <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
            {/* Quantity Box */}
            <div
              className="d-flex align-items-center justify-content-between"
              style={{
                border: "1px solid #E1AD01",
                borderRadius: "25px",
                background: "#fff",
                gap: "10px",
                padding: "6px 12px",
              }}
            >
              <button
                className="btn btn-outline-warning"
                onClick={decreaseQty}
                style={{
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  padding: 0,
                  fontSize: "1.1rem",
                  lineHeight: "1",
                  fontWeight: "bold",
                }}
              >
                −
              </button>

              <div className="text-center" style={{ minWidth: "90px" }}>
                <div style={{ fontSize: "0.85rem", color: "#777" }}>{product.title}</div>
                <div className="fw-semibold" style={{ fontSize: "1rem", color: "#333" }}>
                  {quantity}
                </div>
              </div>

              <button
                className="btn btn-outline-warning"
                onClick={increaseQty}
                style={{
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  padding: 0,
                  fontSize: "1.1rem",
                  lineHeight: "1",
                  fontWeight: "bold",
                }}
              >
                +
              </button>
            </div>

            {/* Checkout Button */}
            <button
              className="px-4 py-2 fw-semibold"
              style={{
                backgroundColor: "#E1AD01",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                fontSize: "1rem",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#d99a00";
                e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#E1AD01";
                e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)";
              }}
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
