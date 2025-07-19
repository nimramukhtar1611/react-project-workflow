import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppDataContext from "./components/context/appState";
function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { loginAdmin } = useContext(AppDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAdmin(username, password, () => {
      setTimeout(() => {
        history.push("/dashboard");
      }, 1500);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#fff" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "30px",
          backgroundColor: "#dcdcdc",
          borderRadius: "12px",
        }}
      >
        <h3 className="text-center mb-4" style={{ color: "#E1AD01" }}>Admin Login</h3>

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
        <button
          type="submit"
          className="btn w-100"
          style={{ backgroundColor: "#E1AD01", color: "white" }}
        >
          Login
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default Admin;
