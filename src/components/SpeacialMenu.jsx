import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const SpecialMenu = () => {
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryRes = await axios.get("http://localhost:8000/api/dishes");
        const productRes = await axios.get("http://localhost:8000/api/products");

        if (categoryRes.data.length > 1) {
          const secondCat = categoryRes.data[1]; 
          setCategory(secondCat);

          const relatedProducts = productRes.data
            .filter((p) => p.category === secondCat._id || p.category?._id === secondCat._id)
            .slice(0, 3);

          setProducts(relatedProducts);
        }
      } catch (err) {
        console.error("Error fetching data:", err)
        toast.error("cannot fetch data ")
        ;
      }
    };

    fetchData();
  }, []);

  if (!category || products.length === 0) return null;

  return (
    <div className="container-fluid text-white pt-3 pb-5" style={{ backgroundColor: "#f6f7fa",fontFamily: "'Poppins', Arial, sans-serif" }}>
      <div className="text-center mb-5">
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#E1AD01", fontSize:45 }}>{category.title}</h2>
        <p style={{ color: "gray", maxWidth: "650px", margin: "0 auto", lineHeight: 1.6, fontWeight:500 }}>{category.desc}</p>
      </div>

      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product._id} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
            <div className="card bg-dark text-white" style={{ width: "100%", maxWidth: "22rem", borderRadius: "15px", border: "none", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>
           <img
  src={product.images?.[0] || "https://via.placeholder.com/360x250?text=No+Image"}
  alt={product.title}
  className="card-img-top"
  style={{
    height: "250px",
    objectFit: "cover",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px"
  }}
/>

              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text" style={{ fontSize: "0.95rem" }}>{product.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ color: "#E1AD01", fontWeight: 600 }}>Rs {product.price}</span>
                  <button className="btn btn-outline-warning btn-sm rounded-pill px-3" onClick={() => history.push(`/product/${product._id}`)}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length > 0 && (
 <div className="text-center mt-4">
  <a
    href="#"
    className="btn d-inline-block"
    style={{
      backgroundColor: "#E1AD01",
      color: "#fff",
      padding: "clamp(15px, 2vw, 12px) clamp(14px, 5vw, 20px)",
      borderRadius: "24px",
      textTransform: "uppercase",
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: "clamp(0.75rem, 2.2vw, 1rem)",
      transition: "all 0.3s ease-in-out",
    }}
      onClick={() => history.push(`/category/${category.title}`)}
  >
    View Complete Menu
  </a>
</div>

      )}
    </div>
  );
};

export default SpecialMenu;
