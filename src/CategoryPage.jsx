import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { title } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/dishes").then((res) => {
      const found = res.data.find(
        (cat) => cat.title.toLowerCase() === title.toLowerCase()
      );
      setCategory(found);

      axios.get("http://localhost:8000/api/products").then((productRes) => {
        const filtered = productRes.data.filter(
          (prod) => prod.category._id === found._id
        );
        setProducts(filtered);
      });
    });
  
  }, [title]);

  if (!category)
    return <div className="text-center mt-5" style={{color:"#E1AD01",fontWeight: "bold", letterSpacing: "1px" }}>Loading </div>;

  return (
    <div
      className="container py-5"
    >
      <div className="text-center mb-5">
        <h2 style={{ color: "#E1AD01", fontWeight: "bold", letterSpacing: "1px" }}>
          {category.title}
        </h2>
        <img
          src={category.image}
          alt=""
          className="img-fluid my-4 rounded"
          style={{ maxHeight: "300px", objectFit: "cover", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
        />
        <p style={{ color: "#555", fontSize: "1.1rem" }}>{category.desc}</p>
        <h5 style={{ color: "#E1AD01", fontWeight: "600" }}>
          Price: Rs {category.price}
        </h5>
      </div>

      <hr style={{ borderColor: "#dcdcdc" }} />

      <div className="row">
        {products.map((prod) => (
          <div key={prod._id} className="col-md-4 mb-4">
            <div
              className="card h-100"
              style={{
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={prod.image}
                className="card-img-top"
                alt={prod.title}
                style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", height: "220px", objectFit: "cover" }}
              />
              <div className="card-body" style={{ backgroundColor: "#f8f8f8", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}>
                <h5 className="card-title" style={{ color: "#333" }}>{prod.title}</h5>
                <p className="card-text" style={{ color: "#666", fontSize: "0.95rem" }}>{prod.desc}</p>
              </div>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="text-center text-muted w-100 mt-5">
            No products available in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
