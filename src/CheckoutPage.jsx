import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "./components/context/appContext";

const CheckoutPage = () => {
  const { cartItem ,clearCart} = useContext(AppContext);
  const product = cartItem?.product;
  const quantity = cartItem?.quantity || 1;

  const location = useLocation();
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

  if (!product || !product.title || !product.price || !quantity) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <h1 className="text-warning">AURUM...</h1>
      </div>
    );
  }

  const numericPrice = parseFloat(String(product.price).replace(/[^0-9.]/g, ""));
  const total = numericPrice * quantity;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Order placed successfully!");
    console.log("Order submitted:", formData);
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
      clearCart();

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
      <form onSubmit={handleSubmit} className=" ">
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
        <h4 className="mb-3 fw-bold" style={{ color: "#333" ,fontFamily: "'Playfair Display', serif",    fontSize: "clamp(1.3rem, 5vw, 2rem)",
}}>Order Summary</h4>
        <div className="bg-light p-3 rounded">
          <p><strong>Product:</strong> {product.title}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Unit Price:</strong> Rs {numericPrice}</p>
          <h5 className="text-success">Total: Rs {total.toFixed(2)}</h5>
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
        </button>      </form>
    </div>
  );
};

export default CheckoutPage;