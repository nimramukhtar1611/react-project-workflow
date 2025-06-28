import React from 'react'

const Guests = () => {
  const boxShadow = "0 1px 6px 0 rgba(60,72,88,.04)";
  const sectionTitle = {
     fontFamily:"'Playfair Display', serif",
  fontWeight: 600,
  fontSize: "2rem",
  color: "#222",
  textAlign: "center",
  marginBottom: "1.5rem",
};
const subText = {
            fontFamily: "'Poppins', Arial, sans-serif",
  fontWeight: 400,
  fontSize: "0.97rem",
  color: "#7D7D7D",
  textAlign: "center",
  marginBottom: "2.5rem",
};const statNumber = {
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
  return (
    <div> <div className="container" style={{ maxWidth: 1200, marginTop: 48 }}>
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
  )
}

export default Guests