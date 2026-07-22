import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getDashboardStats,
  getUpcomingDeadlines,
} from "../services/dashboardService";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    applied: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
  });

  const [deadlines, setDeadlines] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const statData = await getDashboardStats();
      const deadlineData = await getUpcomingDeadlines();

      setStats({
        total: statData.total || 0,
        applied: statData.applied || 0,
        interview: statData.interview || 0,
        offer: statData.offer || 0,
        rejected: statData.rejected || 0,
      });

      setDeadlines(deadlineData);
    } catch (err) {
      console.log(err);
    }
  };

  const cards = [
    {
      title: "Total Applications",
      value: stats.total,
      icon: "📄",
    },
    {
      title: "Applied",
      value: stats.applied,
      icon: "🟡",
    },
    {
      title: "Interview",
      value: stats.interview,
      icon: "💬",
    },
    {
      title: "Offers",
      value: stats.offer,
      icon: "🎉",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: "❌",
    },
  ];

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="dashboard">
          <h1>Welcome Back 👋</h1>

          <p className="subtitle">
            Track your internship journey in one place.
          </p>

          <div className="cards">
            {cards.map((card) => (
              <div
                key={card.title}
                className="card glass"
              >
                <div className="icon">{card.icon}</div>

                <h2>{card.value}</h2>

                <p>{card.title}</p>
              </div>
            ))}
          </div>

          <div className="dashboard-grid">
            <div className="glass card">
              <h2>📅 Upcoming Deadlines</h2>

              {deadlines.length === 0 ? (
                <p>No upcoming deadlines.</p>
              ) : (
                deadlines.map((item) => (
                  <div
                    className="deadline"
                    key={item.id}
                  >
                    <strong>{item.company}</strong>

                    <p>{item.role}</p>

                    <span>
                      {new Date(
                        item.deadline
                      ).toLocaleDateString()}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="glass card">
              <h2>⚡ Quick Actions</h2>

              <button
                className="action-btn"
                onClick={() => navigate("/add")}
              >
                ➕ Add Application
              </button>

              <button
                className="action-btn"
                onClick={() => navigate("/applications")}
              >
                💼 Applications
              </button>

              <button
                className="action-btn"
                onClick={() => navigate("/resume-review")}
              >
                🤖 Resume Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;