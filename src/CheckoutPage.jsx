import React, { useState, useContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AppContext from "./components/context/appContext";
import AppDataContext from "./components/context/appState";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(AppContext);
  const [showSummary, setShowSummary] = useState(false);
  const history = useHistory();
const { submitOrder } = useContext(AppDataContext);

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

const handleSubmit = async (e) => {
  e.preventDefault();
  await submitOrder(formData, cartItems, total, () => {
    clearCart();
    setFormData({
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
  });
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

      {/* Order Summary Toggle */}
<div
  className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center p-3 mb-3 rounded shadow-sm"
  style={{
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    border: "1px solid #ddd",
  }}
  onClick={() => setShowSummary(!showSummary)}
>
  {/* Left Side */}
  <div className="d-flex align-items-center mb-2 mb-sm-0">
    <h5
      className="mb-0"
      style={{
        fontSize: "1rem",
        fontWeight: "600",
        color: "#222",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
   Show Order Summary
    </h5>
    <span
      style={{
        fontSize: "1.2rem",
        marginLeft: "8px",
        display: "inline-block",
        transform: showSummary ? "rotate(180deg)" : "rotate(0)",
        transition: "transform 0.3s ease",
        color: "#333",
      }}
    >
      ▼
    </span>
  </div>

  {/* Right Side - Total */}
  <span
    className="text-sm-end"
    style={{
      fontWeight: "600",
      fontSize: "1.1rem",
      color: "#161718",
      fontFamily: "'Playfair Display', serif",
    }}
  >
    Rs {(total + 100).toFixed(2)}
  </span>
</div>


{/* Summary List */}
{showSummary && (
  <div className="bg-light p-3 rounded mb-4">
    {cartItems.map((item, index) => {
      const price = parseFloat(String(item.product.price).replace(/[^0-9.]/g, ""));
      const subtotal = price * item.quantity;
      return (
        <div key={index} className="border-bottom py-3">
          <div className="row align-items-center">
            {/* IMAGE */}
           <div className="col-4 col-sm-2">
  <div
    style={{
      position: "relative",
      width: "100px",
      height: "75px",
    }}
  >
    <img
      src={item.product.images[0]}
      alt={item.product.title}
      className="img-fluid rounded"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        borderRadius: "0.5rem",
      }}
    />
   
    <span
      style={{
        position: "absolute",
        top: "-8px",
        right: "-8px",
        backgroundColor: "#E1AD01",
        color: "#fff",
        borderRadius: "50%",
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.75rem",
        fontWeight: "bold",
        boxShadow: "0 0 4px rgba(0,0,0,0.3)",
      }}
    >
      {item.quantity}
    </span>
  </div></div>

 <div className="d-flex justify-content-between align-items-center mt-3">
  <strong>{item.product.title}</strong>
  <strong>{item.product.price}</strong>
</div>
      
  </div>
        </div>
      );
    })}

    {/* TOTAL */}
     
    <div className="d-flex justify-content-between align-items-center mt-3">
      <strong>Sub Total:</strong>
              <strong style={{ fontSize: "1rem" }}>Rs {total.toFixed(2)}</strong>
    </div>
    <div className="d-flex justify-content-between align-items-center mt-3">
      <strong>Shipping:</strong>
              <strong style={{ fontSize: "1rem" }}>Rs 100</strong>
    </div>
      <div className="d-flex justify-content-between align-items-center mt-3">
      <strong>Total:</strong>
      <strong>Rs {(total + 100).toFixed(2)}</strong>
    </div>
  </div>
)}

      {/* Checkout Form */}
      <form onSubmit={handleSubmit}>
        <h4 className="mb-3 fw-bold" style={{ color: "#333" }}>
          Contact Details
        </h4>
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
          <label className="mb-3 fw-bold" style={{ color: "#333" }}>
            Payment Method
          </label>
          <select
            className="form-select"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            style={{ backgroundColor: "#fff", borderColor: "#dcdcdc" }}
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
