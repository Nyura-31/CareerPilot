import { NavLink, useNavigate } from "react-router-dom";
import { Bot, BriefcaseBusiness, LayoutDashboard, LogOut, Plus, Sprout } from "lucide-react";
import useAuth from "../hooks/useAuth";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/applications", label: "Applications", icon: BriefcaseBusiness },
    { to: "/add", label: "Add Application", icon: Plus },
    { to: "/resume-review", label: "Resume AI", icon: Bot },
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-brand">
          <span className="brand-mark"><Sprout size={19} /></span>
          <span>CareerPilot</span>
        </div>
        <p className="sidebar-caption">Career management system</p>
        <nav className="sidebar-links" aria-label="Main navigation">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `sidebar-link${isActive ? " active-link" : ""}`}>
              <Icon size={18} /> <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        <LogOut size={17} /> <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;
