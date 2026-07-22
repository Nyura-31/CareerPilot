import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Sidebar() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="sidebar">

      <div>

        <h2>🌿 CareerPilot</h2>

        <p
          style={{
            opacity: ".8",
            marginBottom: "35px",
            fontSize: "14px",
          }}
        >
          Career Management System
        </p>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-link active-link" : "sidebar-link"
          }
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            isActive ? "sidebar-link active-link" : "sidebar-link"
          }
        >
          📄 Applications
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "sidebar-link active-link" : "sidebar-link"
          }
        >
          ➕ Add Application
        </NavLink>

        <NavLink
          to="/resume-review"
          className={({ isActive }) =>
            isActive ? "sidebar-link active-link" : "sidebar-link"
          }
        >
          🤖 Resume AI
        </NavLink>

      </div>

      <div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;