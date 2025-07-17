import React, { useState, useContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "./components/context/appContext";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(AppContext);
  const [showSummary, setShowSummary] = useState(false);

  const history = useHistory();
  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      history.push("/");
    }
  }, [cartItems, history]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
     shippingmethod: "Pakistan",
    paymentMethod: "Cash on Delivery",
  });
  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(String(item.product.price).replace(/[^0-9.]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Order placed successfully!");
    console.log("Order submitted:", formData);
    clearCart();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      paymentMethod: "Cash on Delivery",
    });
    history.push("/"); 
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f6f7fa",
        borderRadius: "12px",
        padding: "30px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        className="mb-4 text-center fw-bold"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          color: "#E1AD01",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Aurum
      </h2>
<div
  className="d-flex justify-content-between align-items-center p-3 mb-3 rounded shadow-sm"
  style={{
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    border: "1px solid #ddd",
  }}
  onClick={() => setShowSummary(!showSummary)}
>
  <div className="d-flex align-items-center">
    <h5
      className="mb-0"
      style={{
        fontSize: "0.9rem",
        fontWeight: "550",
        color: "#222",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Show Order Summary
    </h5>
    <span
      style={{
        fontSize: "1rem",
        marginLeft: "10px",
        display: "inline-block",
        transform: showSummary ? "rotate(180deg)" : "rotate(0)",
        transition: "transform 0.3s ease",
      }}
    >
      ▼
    </span>
  </div>
  <span
    style={{
      fontWeight: "550",
      fontSize: "1.1rem",
      color: "#161718ff",
          fontFamily: "'Playfair Display', serif",
    }}
  >
Rs {(total + 250).toFixed(2)}  </span>
</div>

{showSummary && (
  <div className="bg-light p-3 rounded mb-4">
    {cartItems.map((item, index) => {
      const price = parseFloat(String(item.product.price).replace(/[^0-9.]/g, ""));
      const subtotal = price * item.quantity;
      return (
        <div key={index} className="border-bottom py-3">
          <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3">
            <img
              src={item.product.images[0]}
              alt={item.product.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div className="flex-grow-1">
              <h6 className="mb-1">{item.product.title}</h6>
              <small className="text-muted">
                Qty: {item.quantity} × Rs {price}
              </small>
            </div>
            <div className="text-sm-end">
              <strong>Rs {subtotal.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      );
    })}
    

    <div className="mt-3 pt-3 border-top">
  <div className="d-flex justify-content-between">
    <strong>Shipping:</strong>
    <strong>Rs 250</strong> 
  </div>
  <div className="d-flex justify-content-between mt-2">
    <strong>Subtotal:</strong>
    <strong>Rs {(total + 250).toFixed(2)}</strong>
  </div>
</div>

  </div>)}
    <form onSubmit={handleSubmit}>
        <h4 className="mb-3 fw-bold" style={{ color: "#333" }}>Contact Details</h4>
 <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              style={{ backgroundColor: "#fff", borderColor: "#dcdcdc" }}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              style={{ backgroundColor: "#fff", borderColor: "#dcdcdc" }}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              style={{ backgroundColor: "#fff", borderColor: "#dcdcdc" }}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              style={{ backgroundColor: "#fff", borderColor: "#dcdcdc" }}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            style={{ backgroundColor: "#fff", borderColor: "#dcdcdc" }}
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              style={{ backgroundColor: "#fff", borderColor: "#dcdcdc" }}
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              className="form-control"
              style={{ backgroundColor: "#fff", borderColor: "#dcdcdc" }}
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
  <div className="mb-3">
  <label className="form-label fw-bold" style={{ color: "#333" }}>
    Shipping Method
  </label>
  <select
    className="form-select"
    name="shippingmethod"
    value={formData.shippingmethod}
    onChange={handleChange}
    style={{
      backgroundColor: "#fff",
      borderColor: "#dcdcdc",
      padding: "10px",
    }}
  >
    <option value="Pakistan">Pakistan</option>
  </select>
</div>

        <div className="mb-3">
           
          <label className="mb-3 fw-bold" style={{ color: "#333" }}>Payment Method</label>
          <select
            className="form-select"
            style={{ backgroundColor: "#fff", borderColor: "#dcdcdc" }}
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option>Cash on Delivery</option>
          </select>
        </div>       

        <button
          type="submit"
          className="btn w-100 mt-4"
          style={{
            backgroundColor: "#E1AD01",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "6px",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
