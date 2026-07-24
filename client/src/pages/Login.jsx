import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";
import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);
      login(data);
      navigate("/dashboard");
    } catch {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <h1>🌿 CareerPilot</h1>

        <h2>Your Career Companion</h2>

        <p>
          Track internships, monitor deadlines,
          organize applications and improve your
          resume with AI — all in one dashboard.
        </p>

        <div className="auth-features">

          <div className="feature">📄 Internship Tracking</div>

          <div className="feature">🤖 AI Resume Review</div>

          <div className="feature">📊 Career Dashboard</div>

          <div className="feature">📅 Deadline Management</div>

          <div className="feature">🚀 Land Your Dream Internship</div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>Welcome Back 👋</h2>

          <p className="auth-subtitle">
            Login to continue
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

            <button className="auth-btn">
              Login
            </button>

          </form>

          <div className="auth-footer">

            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;