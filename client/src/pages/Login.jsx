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
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <h1>CareerPilot</h1>

        <p>
          Organize internships, review resumes with AI,
          manage applications and monitor your career
          journey from one beautiful dashboard.
        </p>

        <div className="auth-features">

          <div>📄 Track Internship Applications</div>

          <div>🤖 AI Resume Analysis</div>

          <div>📊 Dashboard Analytics</div>

          <div>💻 DSA Integrated Features</div>

          <div>🌿 Clean & Productive Workspace</div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>Welcome Back 👋</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              required
            />

            <button
              className="auth-btn"
              type="submit"
            >
              Login
            </button>

          </form>

          <div className="auth-link">

            Don't have an account?

            <br />

            <Link to="/register">
              Create Account
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;