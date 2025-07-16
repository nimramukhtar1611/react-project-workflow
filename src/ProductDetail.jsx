import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from './components/context/appContext';
const ProductDetail = ({ product, onClose }) => {
  const history = useHistory();
const { updateCart, removeFromCart, cartItems, setSidebarOpen } = useContext(AppContext); 
const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [showCartModal, setShowCartModal] = useState(false);

 useEffect(() => {
  const existing = cartItems.find(item => item.product._id === product._id);
  if (existing) {
    setQuantity(existing.quantity);
  }
}, [cartItems, product._id]);

const increaseQty = () => {
  const newQty = quantity + 1;
  setQuantity(newQty);
  updateCart(product, newQty);
};

const decreaseQty = () => {
  if (quantity === 1) {
    removeFromCart(product._id);
  } else {
    const newQty = quantity - 1;
    setQuantity(newQty);
    updateCart(product, newQty);
  }
};

const handleCheckout = () => {
  updateCart(product, quantity);
  onClose(); 
  setSidebarOpen(true); 
};


  return (
    <div className="custom-backdrop">
      <div className="custom-slide-up">
        <div className="modal-content-wrapper p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="text-muted fw-bold mb-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: "240%" }}>
              {product.title}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {/* Carousel */}
          <div className="position-relative mb-3 text-center carousel-container">
            <button
              className="btn btn-outline-dark carousel-btn left"
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === 0 ? product.images.length - 1 : prev - 1
                )
              }
            >
              ‹
            </button>

            <img
              src={product.images?.[currentImageIndex] || "https://via.placeholder.com/500"}
              className="img-fluid rounded shadow carousel-image"
              alt={`product-${currentImageIndex}`}
            />

            <button
              className="btn btn-outline-dark carousel-btn right"
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === product.images.length - 1 ? 0 : prev + 1
                )
              }
            >
              ›
            </button>
          </div>

          <p className="text-muted" style={{ fontSize: "150%" }}>{product.desc}</p>
          <h4 className="text-warning fw-bold">Rs {product.price}</h4>

          <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
            <div className="d-flex align-items-center justify-content-between border rounded-pill px-3 py-1 bg-white" style={{ border: "1px solid #E1AD01" }}>
              <button className="btn btn-outline-warning btn-sm rounded-circle" onClick={decreaseQty}>−</button>
              <div className="px-3 fw-semibold" style={{ color: "black" }}>{quantity}</div>
              <button className="btn btn-outline-warning btn-sm rounded-circle" onClick={increaseQty}>+</button>
            </div>

          <button
  className="btn add-to-cart-btn fw-semibold px-4 py-2"
  onClick={handleCheckout}
>
  <i className="bi bi-cart-plus me-2"></i> Add to Cart
</button>

          </div>
        </div>

      </div>

      <style>{`
      .add-to-cart-btn {
  background-color: #E1AD01;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 12px 28px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #c89600;
  transform: scale(1.03);
}

@media (max-width: 576px) {
  .add-to-cart-btn {
    width: 100%;
    font-size: 1rem;
    padding: 12px 20px;
  }
}
 .custom-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1050;
}

.custom-slide-up {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 850px;
  height: 95vh;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  overflow-y: auto;
  z-index: 1055;
  animation: slideUp 0.5s ease-out;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.2);
}

.modal-content-wrapper {
  font-family: 'Poppins', sans-serif;
}

@keyframes slideUp {
  0% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}

.carousel-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  max-height: 420px;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  background-color: #E1AD01;
  color: white;
}

.carousel-btn.left {
  left: 10px;
}

.carousel-btn.right {
  right: 10px;
}

.btn-outline-warning {
  border-color: #E1AD01;
}

.btn-outline-warning:hover {
  background-color: #E1AD01;
  color: white;
}

.quantity-control {
  border: 2px solid #E1AD01;
  background-color: #fff;
  border-radius: 50px;
  padding: 5px 15px;
}

.add-to-cart-btn {
  background-color: #E1AD01;
  color: white;
  border-radius: 30px;
  padding: 10px 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #c89600;
}

.add-to-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* 📱 Small Device Responsive */
@media (max-width: 576px) {
  .custom-slide-up {
    max-width: 100%;
    width: 100%;
    height: 95vh;
    border-radius: 20px 20px 0 0;
  }

  .carousel-image {
    max-height: 230px;
  }

  .carousel-btn {
    width: 32px;
    height: 32px;
    font-size: 1.5rem;
  }
}

`}</style>

    </div>
  );
};

export default ProductDetail;
