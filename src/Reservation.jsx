import React from "react";

const ReservationForm = () => {
  const times = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
    "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"
  ];
  const guests = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div
      className="container-fluid d-flex flex-column align-items-center"
      style={{
        minHeight: "100vh",
        background: "#FAFAFA",
        fontFamily: "'Poppins', Arial, sans-serif",
        padding: 0,
        margin: 0,
      }}
    >
      <form
        className="w-100"
        style={{
          maxWidth: "480px",
          margin: "48px auto 0 auto",
          background: "transparent",
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <h2
          className="text-center"
          style={{
            fontWeight: 600,
            fontSize: "2rem",
            marginBottom: "12px",
            color: "#191919",
            letterSpacing: 0,
            fontFamily: "'Playfair Display', serif"
          }}
        >
          Reservation
        </h2>
        <div
          className="text-center"
          style={{
            fontSize: "1.03rem",
            fontWeight: 400,
            color: "#6C6C6C",
            marginBottom: "28px",
            fontFamily: "'Poppins', Arial, sans-serif",
          }}
        >
          Secure your table and enjoy an exceptional dining experience
        </div>
        <div className="mb-3">
          <label
            htmlFor="fullname"
            className="form-label"
            style={{
              fontWeight: 500,
              color: "#191919",
              marginBottom: "6px",
              fontSize: "1rem",
              fontFamily: "'Poppins', Arial, sans-serif",
            }}
          >
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            className="form-control"
            placeholder="Enter Your full name"
            style={{
              border: "1.5px solid #F1F1F1",
              borderRadius: "24px",
              height: "48px",
              padding: "0 18px",
              fontSize: "1rem",
              background: "#fff",
              color: "#191919",
              fontFamily: "'Poppins', Arial, sans-serif",
            }}
          />
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <label
              htmlFor="date"
              className="form-label"
              style={{
                fontWeight: 500,
                color: "#191919",
                marginBottom: "6px",
                fontSize: "1rem",
                fontFamily: "'Poppins', Arial, sans-serif",
              }}
            >
              Date
            </label>
            <div className="position-relative">
              <input
                id="date"
                type="text"
                className="form-control"
                placeholder="dd/mm/yyyy"
                style={{
                  border: "1.5px solid #F1F1F1",
                  borderRadius: "24px",
                  height: "48px",
                  padding: "0 40px 0 18px",
                  fontSize: "1rem",
                  background: "#fff",
                  color: "#191919",
                  fontFamily: "'Poppins', Arial, sans-serif",
                }}
              />
              <svg
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                  color: "#C9C9C9",
                }}
                fill="none"
                stroke="#C9C9C9"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="#C9C9C9" strokeWidth="1.5" />
                <path d="M8 2v4M16 2v4" stroke="#C9C9C9" strokeWidth="1.5" />
                <path d="M3 10h18" stroke="#C9C9C9" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <label
              htmlFor="time"
              className="form-label"
              style={{
                fontWeight: 500,
                color: "#191919",
                marginBottom: "6px",
                fontSize: "1rem",
                fontFamily: "'Poppins', Arial, sans-serif",
              }}
            >
              Time
            </label>
            <div className="position-relative">
              <select
                id="time"
                className="form-select"
                style={{
                  border: "1.5px solid #F1F1F1",
                  borderRadius: "24px",
                  height: "48px",
                  padding: "0 40px 0 18px",
                  fontSize: "1rem",
                  background: "#fff",
                  color: "#191919",
                  fontFamily: "'Poppins', Arial, sans-serif",
                  appearance: "none",
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select time
                </option>
                {times.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <svg
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "18px",
                  height: "18px",
                  pointerEvents: "none",
                }}
                fill="none"
                stroke="#C9C9C9"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5" stroke="#C9C9C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="guests"
            className="form-label"
            style={{
              fontWeight: 500,
              color: "#191919",
              marginBottom: "6px",
              fontSize: "1rem",
              fontFamily: "'Poppins', Arial, sans-serif",
            }}
          >
            Number of Guest
          </label>
          <select
            id="guests"
            className="form-select"
            style={{
              border: "1.5px solid #F1F1F1",
              borderRadius: "24px",
              height: "48px",
              padding: "0 40px 0 18px",
              fontSize: "1rem",
              background: "#fff",
              color: "#191919",
              fontFamily: "'Poppins', Arial, sans-serif",
              appearance: "none",
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Select number of guest
            </option>
            {guests.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="special"
            className="form-label"
            style={{
              fontWeight: 500,
              color: "#191919",
              marginBottom: "6px",
              fontSize: "1rem",
              fontFamily: "'Poppins', Arial, sans-serif",
            }}
          >
            Special Request
          </label>
          <textarea
            id="special"
            rows={3}
            className="form-control"
            placeholder="Any dietary restrictions or special occasions"
            style={{
              border: "1.5px solid #F1F1F1",
              borderRadius: "24px",
              fontSize: "1rem",
              background: "#fff",
              color: "#191919",
              fontFamily: "'Poppins', Arial, sans-serif",
              minHeight: "80px",
              padding: "14px 18px",
              resize: "none",
            }}
          />
        </div>
        <button
          type="submit"
          className="btn w-100 mb-2"
          style={{
            height: "48px",
            background: "#E1AD01",
            color: "#fff",
            border: "none",
            borderRadius: "24px",
            fontSize: "1.06rem",
            fontWeight: 600,
            fontFamily: "'Poppins', Arial, sans-serif",
            letterSpacing: "0.02em",
            boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => {
              e.currentTarget.style.background = "#c49802";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#E1AD01";
              e.currentTarget.style.transform = "scale(1)";
            }}
        >
          Book Now
        </button>
        <div
          className="text-center"
          style={{
            fontWeight: 500,
            fontSize: "0.98rem",
            color: "#191919",
            letterSpacing: "0.01em",
            fontFamily: "'Poppins', Arial, sans-serif",
          }}
        >
          For parties larger than 8, please call us directly at&nbsp;
          <span style={{ color: "#E1AD01" }}>+1(234)567-890</span>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;