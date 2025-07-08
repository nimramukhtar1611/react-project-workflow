import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const location = useLocation();
  const { title, quantity, price } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "Cash on Delivery",
  });
  


  if (!title || !price || !quantity) {
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

  const numericPrice = parseFloat(String(price).replace(/[^0-9.]/g, ""));
  const total = numericPrice * quantity;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Order submitted:", formData);
  toast.success("Order placed successfully!");
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
};

  return (
    <div
      className=""
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f6f7fa",
        borderRadius: "12px",
        padding:"30px",
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
  Checkout
</h2>


      <form onSubmit={handleSubmit}>
        <h4 className="mb-3 fw-bold" style={{ color: "#333" ,fontFamily: "'Playfair Display', serif",    fontSize: "clamp(1.3rem, 5vw, 2rem)",
}}>Contact Details</h4>

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
          <label className="form-label">Payment Method</label>
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

        <hr className="my-4" />

        <h4 className="mb-3 fw-bold" style={{ color: "#333",fontFamily: "'Playfair Display', serif",  fontSize: "clamp(1.3rem, 5vw, 2rem)" }}>Order Summary</h4>
        <div className="px-3 py-3" style={{ backgroundColor: "#fff",  fontSize: "clamp(0.9rem, 5vw, 1rem)",borderRadius: "8px", border: "1px solid #dcdcdc" }}>
          <p><strong>Product:</strong> {title}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Unit Price:</strong> Rs {numericPrice}</p>
          <h5 className="text-success"><strong>Total:</strong> Rs {total.toFixed(2)}</h5>
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
             onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#d99a00";
                e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#E1AD01";
                e.target.style.boxShadow  = "0 4px 10px rgba(0, 0, 0, 0.15)";
              }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
