import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const styles = {
  body: {
    minHeight: "100vh",
    display: "flex",
    background: "#dcdcdc",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', 'Noto Nastaliq Urdu', sans-serif",
    padding: "24px", 
  },
  card: {
    width: "100%",
    maxWidth: "370px",
    border: "none",
    borderRadius: "18px",
    boxShadow: "0 5px 24px #e1ad0130",
    padding: "38px 28px 28px 28px",
    background: "#fff",
    position: "relative",
    overflow: "hidden",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  title: {
    color: "#E1AD01",
    fontWeight: "700",
    marginBottom: "18px",
    textAlign: "center",
    letterSpacing: "2px",
    fontSize: "2rem",
  },
  accentLine: {
    width: "60px",
    height: "4px",
    borderRadius: "2px",
    background: "#E1AD01",
    margin: "0 auto 24px auto",
    opacity: 0.85,
  },
  input: {
    borderColor: "#E1AD01",
    boxShadow: "0 1px 4px #e1ad0120",
    borderWidth: "2px",
    fontSize: "1.1rem",
  },
  button: {
    background: "linear-gradient(90deg, #E1AD01 70%, #dcdcdc 100%)",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.1rem",
    transition: "background 0.2s",
    boxShadow: "0 2px 8px #e1ad0128",
    letterSpacing: "1px",
  },
  buttonHover: {
    background: "linear-gradient(90deg, #b88c00 80%, #dcdcdc 100%)",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.1rem",
    boxShadow: "0 2px 8px #e1ad0128",
  },
  iconWrap: {
    background: "#E1AD01",
    width: 48,
    height: 48,
    borderRadius: "50%",
    margin: "0 auto 18px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 0 6px #e1ad0122",
  },
  icon: {
    color: "#fff",
    fontSize: 24,
  },
  welcome: {
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    letterSpacing: "1px",
    marginBottom: 0,
    marginTop: "8px",
  },
  faded: {
    color: "#E1AD01",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: "1px",
    fontSize: "1.06rem",
    marginBottom: 0,
    marginTop: "12px",
  },
  error: {
    color: "#b30000",
    background: "#ffeaea",
    borderRadius: "8px",
    padding: "8px 12px",
    marginBottom: "10px",
    textAlign: "center",
    fontWeight: 500,
  },
  signupBtn: {
    marginTop: "10px",
    width: "100%",
    background: "#fff",
    color: "#E1AD01",
    border: "2px solid #E1AD01",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "1rem",
    padding: "8px"
  },
};
function ResponsiveStyle() {
  const history = useHistory();
  return (
    <style>{`
      @media (max-width: 480px) {
        .adminpanel-card {
          padding: 24px 8px 18px 8px !important;
          min-width: 0 !important;
          max-width: 98vw !important;
        }
        .adminpanel-title {
          font-size: 1.2rem !important;
        }
        .adminpanel-iconwrap {
          width: 38px !important;
          height: 38px !important;
        }
        .adminpanel-icon {
          font-size: 18px !important;
        }
        .adminpanel-signup-btn {
          font-size: 0.95rem !important;
          padding: 7px !important;
        }
      }
    `}</style>
  );
}

function AdminPanel() {
  const history = useHistory();
  const [input, setInput] = useState({ username: "", password: "" });
  const [btnHover, setBtnHover] = useState(false);
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      });
      const data = await res.json();
      if (res.ok && data.authToken) {
        localStorage.setItem("admin-token", data.authToken);
        setLogged(true);
        setUsername(data.username);
        setInput({ username: "", password: "" });
      } else {
        setError(data.error || "Login failed. Try again.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  if (!logged) {
    return (
      <div style={styles.body}>
        <ResponsiveStyle />
        <div className="card adminpanel-card" style={styles.card}>
          <div className="adminpanel-iconwrap" style={styles.iconWrap}>
            <svg className="adminpanel-icon" style={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 0 0-10 0v2a7 7 0 0 0-3 5.75V21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6.25A7 7 0 0 0 17 9zm-8-2a3 3 0 1 1 6 0v2h-6V7zm10 13H5v-5.25A5 5 0 0 1 12 10a5 5 0 0 1 7 4.75V20z"/></svg>
          </div>
          <h3 className="adminpanel-title" style={styles.title}>Admin Panel</h3>
          <div style={styles.accentLine}></div>
          {error && <div style={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={input.username}
                onChange={e => setInput(i => ({ ...i, username: e.target.value }))}
                required
                style={styles.input}
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={input.password}
                onChange={e => setInput(i => ({ ...i, password: e.target.value }))}
                required
                style={styles.input}
              />
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={btnHover ? styles.buttonHover : styles.button}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              Login
            </button>
          </form>
          <p style={styles.faded}>Only for authorized admins</p>
          <button
            className="adminpanel-signup-btn"
            style={styles.signupBtn}
            onClick={() => history.push('/createadmin')}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      <ResponsiveStyle />
      <div className="card adminpanel-card" style={styles.card}>
        <div className="adminpanel-iconwrap" style={styles.iconWrap}>
          <svg className="adminpanel-icon" style={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
        </div>
        <h2 className="adminpanel-title" style={styles.title}>Welcome, {username}!</h2>
        <div style={styles.accentLine}></div>
        <p style={styles.welcome}>You have successfully logged in.</p>
        <p
        style={{
          marginTop: "22px",
          textAlign: "center",
          color: "#E1AD01",
          fontWeight: 600,
          fontSize: "1.12rem",
          letterSpacing: "1px",
          cursor: "pointer",
          textDecoration: "underline",
          transition: "color 0.2s",
        }}
onClick={() => history.push("/Dashboard")}
        onMouseOver={e => e.currentTarget.style.color = "#b88c00"}
        onMouseOut={e => e.currentTarget.style.color = "#E1AD01"}
      >
        Go to the Dashboard &rarr;
      </p>
      </div>
    </div>
  );
}

export default AdminPanel;