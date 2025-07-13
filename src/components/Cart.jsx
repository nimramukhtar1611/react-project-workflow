import React, { useContext, useState, useEffect } from "react";
import AppContext from './context/appContext';
import { useHistory } from 'react-router-dom';
const Cart = ({ isOpen, onClose }) => {
  const { cartItem, updateCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(cartItem?.quantity || 1);
  const history = useHistory();

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  if (!isOpen || !cartItem) return null;

  const { product } = cartItem;
const subtotal = Number(product.price.replace(/[^0-9.]/g, '')) * quantity;
console.log("Price:", product.price, "Quantity:", quantity, "Subtotal:", subtotal);

  const increaseQty = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    updateCart(product, newQty);
  };

  const decreaseQty = () => {
    const newQty = quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQty);
    updateCart(product, newQty);
  };

 const handleCheckout = () => {
   
      history.push("/checkout", {
        title: product.title,
        quantity,
        price: product.price
      });
    
  };
return (
  <div style={styles.overlay}>
    <div style={styles.modal}>
      <button onClick={onClose} style={styles.closeButton}>×</button>
      <img
        src={product.images?.[0] || "https://via.placeholder.com/300"}
        alt="product"
        style={styles.image}
      />
      <h2 style={styles.title}>{product.title}</h2>
      <p style={styles.price}>Rs {product.price}</p>

      <div style={styles.qtyContainer}>
        <button onClick={decreaseQty} style={styles.qtyBtn}>−</button>
        <span style={styles.qtyText}>{quantity}</span>
        <button onClick={increaseQty} style={styles.qtyBtn}>+</button>
      </div>
      <p style={styles.subtotal}>Subtotal: <span style={{ color: "#E1AD01", fontWeight: "bold" }}>Rs {subtotal}</span></p>
      <button  onClick={handleCheckout}    style={styles.checkoutBtn}>Proceed to Checkout</button>
    </div>
  </div>
);

};

const styles = {
  subtotal: {
  marginTop: "20px",
  fontSize: "1.2rem",
  fontWeight: "500",
  color: "#333"
},

 overlay: {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1055,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
},

 modal: {
  backgroundColor: "#fff",
  width: "100%",
  height: "100%",
  padding: "30px 20px",
  borderRadius: "0", // fullscreen so no rounded corners
  textAlign: "center",
  position: "relative",
  boxShadow: "0 0 20px rgba(0,0,0,0.4)",
  overflowY: "auto" // so content scrolls on mobile if needed
},

  checkoutBtn: {
  marginTop: "30px",
  padding: "12px 24px",
  fontSize: "1.1rem",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  width: "100%",               // Full-width on mobile
  maxWidth: "320px",           // But not too wide on desktop
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",            // Centered
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  transition: "all 0.3s ease",
},

closeButton: {
  position: "absolute",
  top: "2px",
  right: "90px",
  fontSize: "2rem", 
  background: "none",
  border: "none",
  cursor: "pointer",
  zIndex: 10
},

  image: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "contain",
    marginBottom: "20px"
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.8rem",
    margin: "10px 0"
  },
  price: {
    fontWeight: "bold",
    color: "#E1AD01",
    fontSize: "1.2rem"
  },
  qtyContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px"
  },
  qtyBtn: {
    backgroundColor: "#E1AD01",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "1.2rem",
    cursor: "pointer"
  },
  qtyText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color:"black"
  }
};

export default Cart;
