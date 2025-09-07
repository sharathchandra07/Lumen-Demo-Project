import { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import API from "./components/api";

function App({ onLogin, onLogout }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ---- Normal Login ----
  const handleNormalLogin = async (e) => {
    navigate('/home');
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      setUser(user);
      onLogin?.(user);
      navigate("/home");
      console.log("Normal Login User:", user);
    } catch (err) {
      console.error("Normal login error:", err);
      alert("Invalid email or password");
    }
  };

  // ---- Google Login ----
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await API.post("/auth/google", {
        credential: credentialResponse.credential,
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      setUser(user);
      onLogin?.(user);
      navigate("/home");
      console.log("Google User info:", user);
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem("token");
    onLogout?.();
    navigate("/");
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center flex-column"
      style={{
        background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        color: "white",
      }}
    >
      <h1 className="mb-4 fw-bold text-center" style={{ fontSize: "2.3rem" }}>
        📡 Telecom Inventory Management System
      </h1>

      {!user ? (
        <div
          className="card shadow-lg p-5 text-center"
          style={{
            borderRadius: "20px",
            width: "400px",
            background: "white",
            color: "#333",
          }}
        >
          <h3 className="mb-3 fw-semibold">Welcome 👋</h3>
          <p className="mb-4 text-muted">
            Manage telecom assets, track inventory, and optimize resources.  
            Sign in below to continue.
          </p>

          {/* Normal Login Form */}
          <form onSubmit={handleNormalLogin} className="mb-3">
            <div className="mb-3 text-start">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <div className="text-center my-3">OR</div>

          {/* Google Login */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log("Google Login Failed")}
            width="300"
          />
        </div>
      ) : (
        <div
          className="card shadow-lg p-4 d-flex flex-row align-items-center gap-3"
          style={{
            borderRadius: "20px",
            background: "white",
            color: "#333",
          }}
        >
          <img
            src={user.picture || "https://via.placeholder.com/50"}
            alt="profile"
            className="rounded-circle"
            style={{ width: "55px", border: "2px solid #2c5364" }}
          />
          <div>
            <h5 className="mb-1 fw-bold">{user.name || user.email}</h5>
            <button
              className="btn btn-sm btn-outline-danger mt-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const Home = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default Home;
