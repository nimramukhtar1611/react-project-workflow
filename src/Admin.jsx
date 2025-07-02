import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; 

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        username,
        password,
      });
      if (res.data.success) {
        localStorage.setItem("isAuthenticated", "true");
        history.push("/dashboard");
      } else {
        setError("Invalid Credentials");
      }
    } catch (err) {
  if (err.response && err.response.data && err.response.data.msg) {
    setError(err.response.data.msg);
  } else {
    setError("Error Occurred");
  }
}

  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#fff" }}>
      <form
        onSubmit={handleSubmit}
        style={{ width: "400px", padding: "30px", backgroundColor: "#dcdcdc", borderRadius: "12px" }}
      >
        <h3 className="text-center mb-4" style={{ color: "#E1AD01" }}>Admin Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn w-100" style={{ backgroundColor: "#E1AD01", color: "white" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Admin;