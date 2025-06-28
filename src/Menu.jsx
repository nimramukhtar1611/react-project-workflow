import React from "react";

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
];

const Menu = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "#181818",
        width:"100%",
 minHeight: "100vh",
         fontFamily: "'Poppins', Arial, sans-serif",
        padding: "20px",
        margin: "0",
      }}
    >
      <div
        className="row justify-content-center"
        style={{ padding: "54px 0 18px 0" }}
      >
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
      </div>

      <div className="row justify-content-center g-4" style={{ margin: "0" }}>
        {dishes.map((dish) => (
          <div
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            key={dish.name}
          >
            <div
              style={{
                background: "#232323",
                borderRadius: "15px",
                width: "100%",
                maxWidth: "300px",
                minHeight: "400px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(0.97)";
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(184,159,90,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px rgba(0,0,0,0.15)";
              }}
            >
              <img
                src={dish.image}
                alt={dish.name}
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  borderRadius: "15px 15px 0 0",
                  minHeight: "190px",
                }}
              />
              <div
                style={{
                  padding: "26px 22px 22px 22px",
                  color: "#fff",
                  background: "#232323",
                  borderRadius: "0 0 15px 15px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: "1.09rem",
                      marginBottom: "8px",
                      color: "#fff",
                    }}
                  >
                    {dish.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: "0.99rem",
                      color: "#fff",
                      marginBottom: "17px",
                      minHeight: "54px",
                    }}
                  >
                    {dish.desc}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "1.05rem",
            color: "#E1AD01",
                      fontFamily: "'Poppins', Arial, sans-serif",
                      marginRight: "12px",
                    }}
                  >
                    {dish.price}
                  </div>
                  <button
                    style={{
                      background: "transparent",
                      border: "1.5px solid #E1AD01",
            color: "#E1AD01",
                      borderRadius: "24px",
                      fontWeight: 600,
                      fontSize: "0.98rem",
                      padding: "8px 22px",
                      fontFamily: "'Poppins', Arial, sans-serif",
                      boxShadow: "none",
                      transition: "background 0.2s, color 0.2s",
                      cursor: "pointer",
                      outline: "none",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#b89f5a";
                      e.currentTarget.style.color = "#232323";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#b89f5a";
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

      <div
        className="row justify-content-center"
        style={{ marginTop: "36px", marginBottom: "32px" }}
      >
        <div className="col-auto">
          <button
            style={{
              background: "#E1AD01",         

              color: "#fff",
              border: "none",
              borderRadius: "24px",
              fontWeight: 700,
              fontSize: "1.03rem",
              padding: "12px 38px",
            fontFamily: "'Poppins', Arial, sans-serif",
              boxShadow: "0 2px 8px 0 rgba(184,159,90,0.08)",
              transition: "background 0.2s",
              marginBottom: "10px",
              cursor: "pointer",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#9e893f")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#E1AD01")}
          >
            View Complete Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
