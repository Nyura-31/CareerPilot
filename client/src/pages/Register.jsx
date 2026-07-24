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

      alert("Registration Successful");

      navigate("/");

    } catch {

      alert("Registration Failed");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-left">

        <h1>🚀 CareerPilot</h1>

        <h2>Start Your Career Journey</h2>

        <p>

          Manage internship applications,
          deadlines,
          resumes,
          interviews and AI career assistance
          from one beautiful workspace.

        </p>

        <div className="auth-features">

          <div className="feature">💼 Internship Tracker</div>

          <div className="feature">📄 Resume Management</div>

          <div className="feature">🤖 AI Resume Review</div>

          <div className="feature">📊 Smart Dashboard</div>

          <div className="feature">🌿 Productivity Workspace</div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>Create Account ✨</h2>

          <p className="auth-subtitle">

            Join CareerPilot today

          </p>

          <form onSubmit={handleSubmit}>

            <input
              placeholder="Full Name"
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

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

              Create Account

            </button>

          </form>

          <div className="auth-footer">

            Already have an account?

            <Link to="/">
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;