import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar">
      <div>
        <h2>Dashboard</h2>
        <p>Track your internship journey</p>
      </div>
    </div>
  );
}

export default Navbar;