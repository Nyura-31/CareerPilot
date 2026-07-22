import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);

      alert("Registration Successful!");

      navigate("/");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <h1>CareerPilot</h1>

        <p>
          Build your career portfolio from day one.
          Track applications, organize resumes,
          monitor deadlines and gain AI-powered
          insights—all in one place.
        </p>

        <div className="auth-features">

          <div>🚀 Internship Tracker</div>

          <div>📄 Resume Management</div>

          <div>🤖 AI Resume Review</div>

          <div>📊 Dashboard Analytics</div>

          <div>🌱 Beautiful Productivity Workspace</div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>Create Account ✨</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              required
            />

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
              Create Account
            </button>

          </form>

          <div className="auth-link">

            Already have an account?

            <br />

            <Link to="/">
              Login Here
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;