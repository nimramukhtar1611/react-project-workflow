import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const sectionTitle = {
     fontFamily:"'Playfair Display', serif",
  fontWeight: 600,
  fontSize: "2rem",
  color: "#222",
  textAlign: "center",
  marginBottom: "1.5rem",
};
const checkMark = (
  <span
    style={{
      color: "#E1AD01",
      fontWeight: "bold",
      fontSize: 20,
      display: "inline-block",
      width: 22,
      textAlign: "center",
      marginRight: 4,
      verticalAlign: "middle",
    }}
  >
    ✓
  </span>
);

const cardTitle = {
           background: "#fff",
          borderRadius: 12,
          padding: "12px 14px",
          fontWeight: 600,
          fontFamily: "Playfair Display',serif",
          fontSize: "1.07rem",
          color: "#222",
          textAlign: "center",
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
          marginTop: "-1px", 
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          zIndex: 2
};

const subText = {
            fontFamily: "'Poppins', Arial, sans-serif",
  fontWeight: 400,
  fontSize: "0.97rem",
  color: "#7D7D7D",
  textAlign: "center",
  marginBottom: "2.5rem",
};

const stepCircle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "#F6F6F6",
  color: "#E1AD01",
  fontWeight: 600,
  fontSize:"1.5rem",
  marginBottom: 12,
  border: "1px solid #E5E5E5",
};
const stepTitle = {
  ...cardTitle,
  fontSize: "1.07rem",
  margin: 0,
  marginBottom: 7,
};
const stepText = {
            fontFamily: "'Poppins', Arial, sans-serif",
  fontWeight: 400,
  fontSize: "0.97rem",
  color: "#7D7D7D",
  textAlign: "center",
  margin: 0,
};
const offerBadge = {
  background: "#F6F6F6",
  color: "#E1AD01",
  borderRadius: 13,
  fontSize: "0.85rem",
  fontWeight: 600,
  padding: "2px 13px",
  marginBottom: 9,
  display: "inline-block",
};

  const offerBtn = {
  background: "#E1AD01",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  fontWeight: 600,
  fontSize: "0.97rem",
  padding: "6px 20px",
  cursor: "pointer",
 
};

const offerLink = {
  color: "#E1AD01",
  fontWeight: 600,
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: "0.95rem",
  marginRight: 10,
};

const guestStar = {
  color: "#B89A5B",
  fontSize: 19,
  marginRight: 2,
};

const statNumber = {
            fontFamily: "'Poppins', Arial, sans-serif",
  fontWeight: 700,
  fontSize: "1.3rem",
  color: "#222",
};

const statLabel = {
            fontFamily: "'Poppins', Arial, sans-serif",
  fontWeight: 400,
  fontSize: "0.97rem",
  color: "#7D7D7D",
};

const boxShadow = "0 1px 6px 0 rgba(60,72,88,.04)";
const borderRadius = 16;

const Gallery = () => (
  <div style={{
            fontFamily: "'Poppins', Arial, sans-serif",
    background: "#FAFAFA",
    minHeight: "100vh",
    padding: "25px 0 40px 0",
    width: "100%",
  }}>
    {/* Moments to Remember */}
    <div className="container" style={{ maxWidth: 1200 }}>
      <div style={sectionTitle}>Moments to Remember</div>
      <div className="row g-4 mb-4 ">
        {[
          {
            title: "Elegant Main Dining Area",
            img: "https://imgs.search.brave.com/KFN3FSm78Yo5gWmTqPgfVfeYUN-6uO-oVo13LsaTViE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbnRl/cmlvcmRlc2lnbi5u/ZXQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDQvSW50ZXJp/b3ItRGVzaWduLUF1/dG9iYW4tSm9hbGkt/QmVpbmctaWR4MjMw/MzAxX2hvc3BfamIx/MC0xMDI0eDY5MC5q/cGc"
          },
          {
            title: "Modern Living Space",
            img: "https://imgs.search.brave.com/BQPXV0FPEr3bV44YcZutU2Lu7EuL9qBhdOLJlCSBohg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYXlk/b29yLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMS9T/U1BBNl8wMDAyX1Jh/eWRvb3JfTWFycmlv/dHREZW52ZXIuanBn"
          },
          {
            title: "Minimalist Dining Experience",
            img: "https://imgs.search.brave.com/82mkTYC-aXHmXJe71gOol7Ghmrs1tZP0l0fWsPFLOpY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/MTc5NjMyL3Bob3Rv/L2JhbnF1ZXQtYW5k/LWRpbm5lci1wYXJ0/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ekw0UjhOYjF4/b0xPSnNTZXNwNWJH/eW13Wmd6MTlpUlhR/ZjVDeXJVeFJGUT0"
          },
          {
            title: "Signature Strawberry Cocktails",
            img: "https://imgs.search.brave.com/H2aD8zveDmM00H_XAxHP3bkTZZZc8Tiq53LwU8_-T_I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1hcGkueG9ncnAu/Y29tL2ltYWdlcy83/ZjlmYmJkMC00Yzgx/LTRjMzQtYWYwNi05/ZTM1ODEwNjFjNmV-/cnNfNzY4LmgtY3Jf/MC4wLjE3NTcuMjM0/Mg"
          },
          {
            title: "Intimate Bar Setting",
            img: "https://imgs.search.brave.com/4Q1kaT3O-2hIFbs4TkdWoEWAjMnB883qw_0uuTps2ec/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vdGhlLWluZmF0/dWF0aW9uL2ltYWdl/L3VwbG9hZC9jX2Zp/bGwsd18zODQwLGFy/XzQ6MyxnX2NlbnRl/cixmX2F1dG8vaW1h/Z2VzL0xlX01hZ3Jp/dHRlX0Jhcl8tX0Jh/cm1hbl8tX1ByaW50/X0hlbGVuX0NhdGhj/YXJ0X2NpdG14bA"
          },
          {
            title: "Garden Bistro Experience",
            img: "https://imgs.search.brave.com/HSc7VEjXZhUMm_L391czMiZHimjHSBnGgCcgR0cLqSs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLm90c3RhdGlj/LmNvbS92My9waG90/b3MvNTI5MTQyNjIt/Mj93aWR0aD0xMjgw/JmhlaWdodD03MjAm/d2VicD10cnVl"
          }
        ].map((item, i) => (
          <div className="col-12 col-sm-6 col-lg-4 " key={i}>
            <div
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 140,
                borderRadius,
                boxShadow,
                marginBottom: 8,
                width: "100%"
              }}
            ></div>
            <div style={cardTitle}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Simple Steps to Dine */}
    <div className="container" style={{ maxWidth: 1200, marginTop: 30 }}>
      <div style={sectionTitle}>Simple Steps to Dine</div>
      <div style={subText}>
        Experience our seamless dining journey from reservation to dessert!
      </div>
      <div className="row g-4">
        {[
          {
            title: "Reserve Your Table",
            text: "Book with us to secure your preferred dining time. We recommend reservations 2-3 days in advance for the best experience."
          },
          {
            title: "Arrive & Be Seated",
            text: "Our staff will welcome and guide you to your table. Let us know any special occasions for personalized service."
          },
          {
            title: "Enjoy Your Experience",
            text: "Savor our delectable dishes and celebrate moments, offering unparalleled service for a truly exceptional visit."
          }
        ].map((step, i) => (
          <div className="col-12 col-md-4" key={i}>
            <div style={{
              background: "#fff",
              borderRadius,
              boxShadow,
              padding: "32px 18px 20px 18px",
              minHeight: 215,
              textAlign: "center"
            }}>
              <div style={stepCircle}>{i+1}</div>
              <div style={stepTitle}>{step.title}</div>
              <div style={stepText}>{step.text}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Enhancing Your Visit */}
    <div className="row mt-4">
  <div className="col-12">
    <div
      style={{
        background: "#fff",
        borderRadius,
        boxShadow,
        display: "flex",
        flexWrap: "wrap",
        padding: "0",
        minHeight: 135,
      }}
    >
      <div
        style={{
          flex: 1.1,
          backgroundImage:
            "url('https://imgs.search.brave.com/62Zyt53HzZEovBq--SyCNmZEOxR-LWHG0eF0-Urpujw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aG90ZWxkZWwuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzEwL2hvdGVsLWRl/bC1jb3JvbmFkby1z/dW4tZGVjay1jb3Vw/bGVzLWZyaWVuZHMt/c3Vuc2V0LWZpcmUt/d2VjcmVhdGUtMjAy/My0xNjAweDEwMDAt/MS5qcGc')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
          minHeight: 135,
          minWidth: 210,
        }}
      ></div>
      <div
        style={{
          flex: 1,
          padding: "30px 28px 30px 28px",
          minWidth: 210,
        }}
      >
        <div
          style={{
            ...stepTitle,
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          Enhancing Your Visit
        </div>
        <ul style={{ paddingLeft: 0, marginBottom: 12, listStyle: "none" }}>
          <li style={{ ...stepText, textAlign: "left", margin: 0, display: "flex", alignItems: "center" }}>
            <span style={{ color: "#E1AD01", fontSize: 18, marginRight: 8 }}>✔</span>
            Request a sommelier consultation for perfect wine pairings.
          </li>
          <li style={{ ...stepText, textAlign: "left", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#E1AD01", fontSize: 18, marginRight: 8 }}>✔</span>
            Ask about our chef's table experience for a behind-the-scenes view.
          </li>
          <li style={{ ...stepText, textAlign: "left", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#E1AD01", fontSize: 18, marginRight: 8 }}>✔</span>
            Inquire about our seasonal tasting menus for a curated dining journey.
          </li>
        </ul>
        <button style={offerBtn}>Reserve Your Experience</button>
      </div>
    </div>
  </div>
</div></div>


    {/* Special Offers & Private Events */}
    <div className="container" style={{ maxWidth: 1200, marginTop: 48 }}>
      <div style={sectionTitle}>Special Offers & Private Events</div>
      <div style={subText}>
        Exclusive dining experiences crafted for memorable occasions
      </div>
      <div className="row g-4">
{/* Offer 1 */}
<div className="col-12 col-md-6">
  <div style={{
    background: "#fff",
    borderRadius,
    boxShadow,
    padding: "0 0 18px 0",
  }}>
    <div style={{
      backgroundImage: `url('https://imgs.search.brave.com/yWpTIX-PxiOKuf2bB39Sr1IqIbkia47aRD9XiPAkyxQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDI1/LzA2LzI1L211bHRp/bWVkaWEvMjVGRC1I/TU9ORzE4LWZtd3Av/MjVGRC1ITU9ORzE4/LWZtd3AtdGhyZWVC/eVR3b01lZGl1bUF0/MlguanBnP2F1dG89/d2VicA')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      width: "100%",
      height: 220, 
      display: "block"
    }}></div>
    <div style={{ padding: "16px 18px 0 18px" }}>
      <span style={offerBadge}>Limited Time</span>
      <div style={stepTitle}>Chef's Tasting Menu</div>
      <div style={stepText}>
        Experience a five-course seasonal tasting menu with optional wine pairings, available Tuesday through Thursday.
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <span style={offerLink}>See your menu</span>
        <button style={offerBtn}   onMouseOver={(e) => {
              e.currentTarget.style.background = "#c49802";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#E1AD01";
              e.currentTarget.style.transform = "scale(1)";
            }}>Book Now</button>
      </div>
    </div>
  </div>
</div>

{/* Offer 2 */}
<div className="col-12 col-md-6">
  <div style={{
    background: "#fff",
    borderRadius,
    boxShadow,
    padding: "0 0 18px 0",
  }}>
    <div style={{
      backgroundImage: `url('https://imgs.search.brave.com/lWUITk2w1MvhrVhG1YuvZShU5fNG6qxTiDPE-V-oh78/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/Mjc2OTI0Ni9waG90/by9jb3VwbGUtZHJp/bmtpbmctd2luZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SHpIajBpRks3RnA0/WHI3aGtWZkNBQ2ZG/ak51dU1MOTQ1UG1K/WkdZNXRROD0')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      width: "100%",
      height: 220, 
      display: "block"
    }}></div>
    <div style={{ padding: "16px 18px 0 18px" }}>
      <span style={offerBadge}>Weekly Special</span>
      <div style={stepTitle}>Date Night Package</div>
      <div style={stepText}>
        Enjoy a three-course dinner for two with a bottle of sommelier-selected wine and special dessert service.
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <span style={offerLink}>See package</span>
        <button style={offerBtn}   onMouseOver={(e) => {
              e.currentTarget.style.background = "#c49802";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#E1AD01";
              e.currentTarget.style.transform = "scale(1)";
            }}>Book Now</button>
      </div>
    </div>
  </div>
</div>
        {/* Offer 3 */}
        <div className="col-12 mt-4">
      <div
        style={{
          background: "#fff",
          borderRadius,
          boxShadow,
          display: "flex",
          flexWrap: "wrap",
          padding: "0",
          minHeight: 135,
        }}
      >
        <div
          style={{
            flex: 1.1,
            backgroundImage:
              "url('https://imgs.search.brave.com/S_99_-uX8VPW0gGrNVpzXW8OUKSJro9r3pd-8f23W5s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/cGVlcnNwYWNlLmNv/bS9pbWFnZS91cGxv/YWQvYXJfMSxjX2Zp/bGwsZ19hdXRvLGZf/YXV0byxxX2F1dG8s/ZHByX2F1dG8sd18z/ODQwL25kbnpicHQ1/OWV2eGVkc25iajcz')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            minHeight: 135,
            minWidth: 210,
          }}
        ></div>
        <div style={{ flex: 1, padding: "30px 28px 30px 28px", minWidth: 210 }}>
          <div style={stepTitle}>Host Your Private Event</div>
          <div style={{ ...stepText, marginBottom: 10, textAlign: "right" }}>
            From intimate gatherings to corporate events, our private dining spaces offer an elegant setting for your special occasion.
          </div>
          <ul style={{ paddingLeft: 0, marginBottom: 12, listStyle: "none" }}>
            <li
              style={{
                ...stepText,
                textAlign: "right",
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{marginLeft: 8 }}>{checkMark} Private dining room for up to 32 guests </span>
            </li>
            <li
              style={{
                ...stepText,
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ marginLeft: 8 }}>{checkMark}Full restaurant buyout options available</span>
            </li>
            <li
              style={{
                ...stepText,
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <span style={{ marginLeft: 8 }}>{checkMark}Customizable menus for your event</span>
            </li>
          </ul>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <button
              style={{
                ...offerBtn,
                background: "#fff",
                color: "#B89A5B",
                border: "1.5px solid #B89A5B",
              }}
                onMouseOver={(e) => {
              e.currentTarget.style.background = "#F6F6F6";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "scale(1)";
            }}
            >
              Inquire Now
            </button>
            <button style={offerBtn}   onMouseOver={(e) => {
              e.currentTarget.style.background = "#c49802";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#E1AD01";
              e.currentTarget.style.transform = "scale(1)";
            }}>Download Brochure</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>

    {/* What Our Guests Say */}
    <div className="container" style={{ maxWidth: 1200, marginTop: 48 }}>
      <div style={sectionTitle}>What Our Guests Say</div>
      <div style={subText}>
        Authentic experiences shared by our valued patrons
      </div>
    <div className="row g-4">
  {[
    {
      text: '"An extraordinary culinary journey that exceeded our expectations. The team went above and beyond. Highly recommend!"',
      name: "Jessica Lin",
      sub: "Restaurant Client",
      image:"https://imgs.search.brave.com/WU-BdchOyZu7_vtYa_zxlqQkbGO-As-oO2dtUewU3Mk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZWlvLmZvcmJlcy5j/b20vc3BlY2lhbHMt/aW1hZ2VzL2ltYWdl/c2VydmUvNjA3NmZk/MmEyZWQ5Yjc2Njk2/OGQyYjlkLzB4MC5q/cGc_Zm9ybWF0PWpw/ZyZjcm9wPTEwODAs/MTA4MCx4MCx5MCxz/YWZlJmhlaWdodD00/MTYmd2lkdGg9NDE2/JmZpdD1ib3VuZHM"
    },
    {
      text: '"The chef\'s tasting menu is a highlight! Couldn\'t have asked for a better birthday night; our whole table described the entire experience."',
      name: "Robert Walker",
      sub: "Food Enthusiast",
      image:"https://imgs.search.brave.com/X-4F4i_w62aw_Hqqa1CGHDofalrz54m6_ZCL1CakTi4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy80MjgwNjhh/ZTJmMGVmYTVlZjg2/NDNlMDUxZjY2NmQ1/NTE5ZDZjMmU1MDQx/YzdjZGE3OGMyZGZm/ODliZGExOTc4Lmpw/Zw"
    },
    {
      text: '"We hosted our anniversary dinner here and were so pleased by everything! Will be back to make celebrations memorable."',
      name: "Regan Oscar",
      sub: "Regular Guest",
      image:"https://imgs.search.brave.com/k9RcgqOvKt_uq0YCPQ9ZeDfxLq-MAhdtEp7rZwWv1Xw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yLzQu/dnhMZklFbjI5X2lv/djkzZDhxR2ctLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEV5TkRJN2FEMDVO/amMtL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL2FvbF9u/eV9wb3N0X3VzX25l/d3NfYXJ0aWNsZXNf/MTIzL2Q3MmJjZTU3/NmNiZWQ0YThhZTQ1/N2U3YjA1ZWUyNzE5"
    }
  ].map((review, i) => (
    <div className="col-12 col-md-4" key={i}>
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 1px 8px rgba(0,0,0,0.09)",
        padding: "30px 18px 18px 18px",
        textAlign: "center",
        minHeight: "300px"
      }}>
        <img
          src={review.image}
          alt={review.name}
          style={{
            width: "56px",
            height: "56px",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.11)",
            border: "2.5px solid #fff",
            marginTop: "-18px",  
            marginBottom: "12px",
            background: "#eee"
          }}
        />
        <div>
          {[1, 2, 3, 4, 5].map(star => (
            <span style={{ color: "#B89A5B", fontSize: "1.1rem" }} key={star}>★</span>
          ))}
        </div>
        <div style={{
          fontFamily: "'Poppins', Arial, sans-serif",
          fontWeight: 400,
          color: "#222",
          fontSize: "1rem",
          margin: "15px 0 11px 0",
          minHeight: 55,
        }}>{review.text}</div>
        <div style={{
          fontFamily: "'Poppins', Arial, sans-serif",
          fontWeight: 600,
          color: "#222",
          fontSize: "0.96rem",
          marginBottom: 0,
        }}>{review.name}</div>
        <div style={{
          fontFamily: "'Poppins', Arial, sans-serif",
          fontWeight: 400,
          color: "#B89A5B",
          fontSize: "0.92rem",
          marginBottom: 0,
        }}>{review.sub}</div>
      </div>
    </div>
  ))}
</div>
      {/* Guest Stats */}
      <div className="row g-4 mt-4">
        {[
          { num: "4.9", label: "Average Rating" },
          { num: "97%", label: "Would Recommend" },
          { num: "5000+", label: "Happy Customers" },
          { num: "12", label: "Culinary Awards" },
        ].map((stat, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div style={{
              background: "#F6F6F6",
              borderRadius: 14,
              padding: "18px 0",
              textAlign: "center",
              boxShadow,
            }}>
              <div style={statNumber}>{stat.num}</div>
              <div style={statLabel}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;