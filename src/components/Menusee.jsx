import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Menusee = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDishes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/dishes");
      setDishes(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch dishes");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/removedishes/${id}`);
      setDishes((prev) => prev.filter((dish) => dish._id !== id));
    } catch (err) {
      alert("Failed to delete dish");
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2 style={{ color: "#E1AD01", marginBottom: "20px" }}>🍽️ View All Category</h2>
      <div className="row">
        {dishes.map((dish) => (
          <div className="col-md-4 mb-4" key={dish._id}>
            <div className="card h-100 shadow-sm">
              <img
                src={dish.image}
                className="card-img-top"
                alt={dish.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{dish.title}</h5>
                <p className="card-text" style={{ minHeight: "60px" }}>{dish.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontWeight: "bold", color: "#E1AD01" }}>{dish.price}</span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(dish._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menusee;