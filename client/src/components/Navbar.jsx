import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <header className="navbar">
      <div>
        <h2>Dashboard</h2>

        <p>Track your internship journey</p>
      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}

export default Navbar;