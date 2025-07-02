import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  const hardDishes = [
    {
      name: "Lobster Ravioli",
      desc: "Handcrafted ravioli filled with tender lobster meat, served with a delicate scampi cream sauce and fresh herbs.",
      price: "$38",
      image: "https://imgs.search.brave.com/gI1mAnSMGUPfbtMFu94mnRMuSctQwkZjPw7jaZ0l234/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aGVk/ZWZpbmVkZGlzaC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTIvMjAyMC0x/Mi0xMC0wMy4zMi40/My01MDB4NTAwLmpw/Zw",
    },
    {
      name: "Filet Mignon",
      desc: "Prime-aged beef tenderloin, truffle butter, wild mushroom ragout, and a port wine reduction sauce.",
      price: "$42",
      image: "https://imgs.search.brave.com/d381DEYK959Jsc0ElLtcZJ4JN5SdN5ihT65OUC7rXeo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2lsbGNvb2tmb3Jz/bWlsZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAx/L0ZpbGV0LW1pZ25v/bi1pbi10aGUtcGFu/LWNsb3NldXAtc3F1/YXJlLmpwZw",
    },
    {
      name: "Truffle Pesto Linguine",
      desc: "Homemade linguine pasta with fresh basil pesto, shaved black truffles, and aged parmesan.",
      price: "$28",
      image: "https://imgs.search.brave.com/bxxdR7EWvdNTPRWYrOwbfTGGz6eNLTySO-_2JtEe4FQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaG9y/dGdpcmx0YWxsb3Jk/ZXIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA3L3Nw/aW5hY2gtYXJ0aWNo/b2tlLWJhc2lsLXBh/c3RhLXNxdWFyZS0y/LTUwMHg1MDAuanBn",
    },
  ];

  const [slides, setSlides] = useState([]);

  const chunk = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

  useEffect(() => {
    const updateChunks = () => {
      const width = window.innerWidth;
      const size = width < 576 ? 1 : width < 768 ? 2 : 3;
      setSlides(chunk(hardDishes, size));
    };
    updateChunks();
    window.addEventListener("resize", updateChunks);
    return () => window.removeEventListener("resize", updateChunks);
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        background: "black",
        width: "100%",
        fontFamily: "'Poppins', Arial, sans-serif",
        padding: "20px 0",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div className="col-12 text-center mb-5">
        <h2
          style={{
            color: "#fff",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "2.2rem",
            marginBottom: "14px",
          }}
        >
          Signature Dishes
        </h2>
        <div
          style={{
            color: "#e2e2e2",
            fontSize: "1.06rem",
            margin: "0 auto 36px",
            maxWidth: "650px",
            lineHeight: 1.6,
          }}
        >
          Our master chefs have perfected these culinary masterpieces that define our restaurant's distinctive identity.
        </div>
      </div>

      <div>
        <div className="carousel-inner">
          {slides.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row justify-content-center mx-0">
                {group.map((dish) => (
                  <div
                    className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    key={dish.name}
                  >
                    <div
                      className="card"
                      style={{
                        width: "24rem",
                        height: "500px",
                        borderRadius: "15px",
                        border: "none",
                        margin: "20px",
                        backgroundColor: "#181818",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="card-img-top"
                        style={{
                          borderTopLeftRadius: "15px",
                          borderTopRightRadius: "15px",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body" style={{ height: "calc(100% - 200px)", padding: "1rem" }}>
                        <h5
                          className="card-title"
                          style={{
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: "1.2rem",
                          }}
                        >
                          {dish.name}
                        </h5>
                        <p
                          className="card-text"
                          style={{
                            color: "#fff",
                            fontSize: "0.95rem",
                            lineHeight: 1.5,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontFamily: "'Poppins', Arial, sans-serif",
                          }}
                        >
                          {dish.desc}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span style={{ color: "#E1AD01", fontWeight: 600, fontSize: "1.1rem" }}>
                            {dish.price}
                          </span>
                          <button
                            className="btn btn-outline-warning px-md-3 py-md-3"
                            style={{
                              borderRadius: "20px",
                              color: "#fff",
                              fontWeight: 600,
                              justifyContent: "space-between",
                              fontFamily: "'Poppins', Arial, sans-serif",
                            }}
                          >
                            View Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

     <div className="text-center mt-md-4">
  <a
    href="#"
    className="btn btn-light btn-lg view-menu-btn"
  >
    View Complete Menu
  </a>

  <style jsx>{`
    .view-menu-btn {
      background-color: #E1AD01;
      color: #fff;
      padding: 10px 20px;
      border-radius: 25px;
      text-transform: uppercase;
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: 1rem;
    }

    @media (max-width: 576px) {
      .view-menu-btn {
        font-size: 0.9rem;
        padding: 8px 16px;
        width: 90%;
      }
    }
  `}</style>
</div>

    </div>
  );
};

export default Menu;  