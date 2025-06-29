import React from "react";

const Menu = () => {
  const dishes = [
    {
      name: "Lobster Ravioli",
      desc:
        "Handcrafted ravioli filled with tender lobster meat, served with a delicate scampi cream sauce and fresh herbs.",
      price: "$38",
      image:
        "https://imgs.search.brave.com/gI1mAnSMGUPfbtMFu94mnRMuSctQwkZjPw7jaZ0l234/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aGVk/ZWZpbmVkZGlzaC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTIvMjAyMC0x/Mi0xMC0wMy4zMi40/My01MDB4NTAwLmpw/Zw",
    },
    {
      name: "Filet Mignon",
      desc:
        "Prime-aged beef tenderloin, truffle butter, wild mushroom ragout, and a port wine reduction sauce.",
      price: "$42",
      image:
        "https://imgs.search.brave.com/d381DEYK959Jsc0ElLtcZJ4JN5SdN5ihT65OUC7rXeo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2lsbGNvb2tmb3Jz/bWlsZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAx/L0ZpbGV0LW1pZ25v/bi1pbi10aGUtcGFu/LWNsb3NldXAtc3F1/YXJlLmpwZw",
    },
    {
      name: "Truffle Pesto Linguine",
      desc:
        "Homemade linguine pasta with fresh basil pesto, shaved black truffles, and aged parmesan.",
      price: "$28",
      image:
        "https://imgs.search.brave.com/bxxdR7EWvdNTPRWYrOwbfTGGz6eNLTySO-_2JtEe4FQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaG9y/dGdpcmx0YWxsb3Jk/ZXIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA3L3Nw/aW5hY2gtYXJ0aWNo/b2tlLWJhc2lsLXBh/c3RhLXNxdWFyZS0y/LTUwMHg1MDAuanBn",
    },
    {
      name: "Beef Steak",
      desc:
        "Juicy beef steak with a savory salad and sauce, perfectly seared and served with rustic sides for a satisfying gourmet experience.",
      price: "$35",
      image:
        "https://imgs.search.brave.com/-YPs-31Kdu8J4UpU8iz8HuW5PCyEb1_lPN_uJEI2Y7c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDMv/MTE1Lzk4NC9zbWFs/bC9iYnEtYmVlZi1z/dGVhay13aXRoLXNh/bGFkLWFuZC1zYXVj/ZS1zZXJ2ZWQtaW4t/ZGlzaC1pc29sYXRl/ZC1vbi10YWJsZS1z/aWRlLXZpZXctb2Yt/bWlkZGxlLWVhc3Qt/Zm9vZC1waG90by5q/cGc",
    },
    {
      name: "Kimbap Rolls",
      desc:
        "Traditional Korean-style seaweed rice rolls filled with fresh vegetables and savory protein, perfect for light yet flavorful bites.",
      price: "$18",
      image:
        "https://imgs.search.brave.com/mSTB5YdiZqGq7ELZsw6ATWhP-84ret9qmkgQpIpdHgQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzA5Lzg0LzIx/LzM2MF9GXzEzMDk4/NDIxNTNfZEwxYXhp/bUlzV2Y2Q3ZnYXRo/SjZqeGhUeHQ1TkFF/bDcuanBn",
    },
    {
      name: "Prawn Curry",
      desc:
        "Aromatic prawn curry infused with rich coconut milk, exotic spices, and garnished with fresh herbs for a bold, coastal flavor.",
      price: "$30",
      image:
        "https://imgs.search.brave.com/kzLYRrOEdcTIfukWJxguYVG61DnoXzgvl7EcGeAtWCE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cmVjaXBldGluZWF0/cy5jb20vdGFjaHlv/bi8yMDIzLzA4L1Bh/bmFuZy1jdXJyeS1w/cmF3bl84LWNsb3Nl/LXVwLmpwZz9yZXNp/emU9NzQ3LDc0Nw",
    },
  ];

  return (
    <div className="container-fluid"
      style={{
        background: "#181818",
        width: "100%",
        minHeight: "40%",
        fontFamily: "'Poppins', Arial, sans-serif",
        padding: "20px",
        margin: "0",
      }}>
        <div className="col-12 text-center">
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
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: "1.06rem",
              fontWeight: 400,
              margin: "0 auto 36px",
              maxWidth: "650px",
              lineHeight: 1.6,
            }}
          >
            Our master chefs have perfected these culinary masterpieces that
            define our restaurant's distinctive identity.
          </div>
        </div>
          <div id="dishCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {dishes.map((dish, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={dish.name}>
             <div className="d-flex justify-content-center">
  <div
    style={{
      background: "#232323",
      borderRadius: "15px",
      width: "90%", // default width for small screens
      maxWidth: "500px", // limit max width
      overflow: "hidden",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    }}
    className="mx-auto"
  >
    <img
      src={dish.image}
      alt={dish.name}
      className="d-block w-100"
      style={{
        aspectRatio: "1/1",
        objectFit: "cover",
        borderRadius: "15px 15px 0 0",
      }}
    />
    <div style={{ padding: "24px", color: "#fff" }}>
      <h4 style={{ fontSize: "1.5rem" }}>{dish.name}</h4>
      <p style={{ fontSize: "1rem", minHeight: "60px" }}>{dish.desc}</p>
      <div className="d-flex justify-content-between align-items-center">
        <span style={{ color: "#E1AD01", fontWeight: 600, fontSize: "1.1rem" }}>
          {dish.price}
        </span>
        <button
          className="btn btn-outline-warning"
          style={{ borderRadius: "20px", fontWeight: 600 }}
        >
          View Detail
        </button>
      </div>
    </div>
  </div>
</div>

            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#dishCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#dishCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
