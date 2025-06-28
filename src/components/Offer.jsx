import React from 'react'

const Offer = () => {
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
    zIndex: 2,
  };
  const stepTitle = {
    ...cardTitle,
    fontSize: "1.07rem",
    margin: 0,
    marginBottom: 7,
    fontFamily: "'Poppins', Arial, sans-serif"
  };

  const stepText = {
    fontFamily: "'Poppins', Arial, sans-serif",
    fontWeight: 400,
    fontSize: "1.06rem", // bigger text
    color: "#7D7D7D",
    textAlign: "center",
    margin: 0,
  };
  const checkMark = (
    <span
      style={{
        color: "#E1AD01",
        fontWeight: "bold",
        fontSize: 22,
        display: "inline-block",
        width: 26,
        textAlign: "center",
        marginRight: 9,
        verticalAlign: "middle",
      }}
    >
      ✓
    </span>
  );
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
    transition: "all 0.15s"
  };

  const offerLink = {
    color: "#E1AD01",
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "0.95rem",
    marginRight: 10,
    padding: "0 2px",
    display: "flex",
    alignItems: "center",
    height: 36, // match button height for vertical alignment
  };
  const sectionTitle = {
    fontFamily: "'Playfair Display', serif",
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
  };
  const boxShadow = "0 1px 6px 0 rgba(60,72,88,.04)";
  const borderRadius = 16;
  return (
    <div>
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
                <div style={{ display: "flex", gap: 8, marginTop: 16, alignItems: "center" }}>
                  <span style={offerLink}>See your menu</span>
                  <button style={offerBtn}
                    onMouseOver={(e) => {
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
                <div style={{ display: "flex", gap: 8, marginTop: 16, alignItems: "center" }}>
                  <span style={offerLink}>See package</span>
                  <button style={offerBtn}
                    onMouseOver={(e) => {
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
                minHeight: 220,
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
                  minHeight: 220,
                  minWidth: 230,
                }}
              ></div>
              <div style={{ flex: 1, padding: "36px 30px 36px 30px", minWidth: 230 }}>
                <div style={stepTitle}>Host Your Private Event</div>
                <div style={{ ...stepText, marginBottom: 16, textAlign: "left" }}>
                  From intimate gatherings to corporate events, our private dining spaces offer an elegant setting for your special occasion.
                </div>
                <ul style={{ paddingLeft: 0, marginBottom: 18, listStyle: "none" }}>
                  <li
                    style={{
                      ...stepText,
                      textAlign: "left",
                      margin: "0 0 12px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      fontSize: "1.07rem"
                    }}
                  >
                    {checkMark} <span>Private dining room for up to 32 guests</span>
                  </li>
                  <li
                    style={{
                      ...stepText,
                      textAlign: "left",
                      margin: "0 0 12px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      fontSize: "1.07rem"
                    }}
                  >
                    {checkMark} <span>Full restaurant buyout options available</span>
                  </li>
                  <li
                    style={{
                      ...stepText,
                      textAlign: "left",
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      fontSize: "1.07rem"
                    }}
                  >
                    {checkMark} <span>Customizable menus for your event</span>
                  </li>
                </ul>
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-start", alignItems: "center" }}>
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
                  <button style={offerBtn}
                    onMouseOver={(e) => {
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
    </div>
  )
}

export default Offer