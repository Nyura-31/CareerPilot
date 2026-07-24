import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getDashboardStats,
  getUpcomingDeadlines,
} from "../services/dashboardService";

import Sidebar from "../components/Sidebar";

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
  const [completed, setCompleted] = useState([]);

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

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const upcoming = deadlineData.filter((item) => {
        const date = new Date(item.deadline);
        date.setHours(0, 0, 0, 0);
        return date >= today;
      });

      const completedList = deadlineData.filter((item) => {
        const date = new Date(item.deadline);
        date.setHours(0, 0, 0, 0);
        return date < today;
      });

      setDeadlines(upcoming);
      setCompleted(completedList);
    } catch (err) {
      console.log(err);
    }
  };

  const cards = [
    {
      title: "Applications",
      value: stats.total,
      icon: "📄",
      color: "#355834",
    },
    {
      title: "Applied",
      value: stats.applied,
      icon: "🟡",
      color: "#D6A84F",
    },
    {
      title: "Interview",
      value: stats.interview,
      icon: "💬",
      color: "#7B68EE",
    },
    {
      title: "Offers",
      value: stats.offer,
      icon: "🎉",
      color: "#1E9E58",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: "❌",
      color: "#D9534F",
    },
  ];

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <div className="dashboard">
          <h1>Welcome Back 👋</h1>

          <p className="subtitle">
            Track your internship journey in one place.
          </p>

          <div className="cards">
            {cards.map((card) => (
              <div key={card.title} className="card glass">
                <div
                  className="icon"
                  style={{
                    background: `${card.color}20`,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>

                <h2>{card.value}</h2>

                <p>{card.title}</p>
              </div>
            ))}
          </div>

          <div className="glass progress-card">
            <h2>📊 Application Progress</h2>

            <div className="progress-row">
              <span>Applied</span>

              <progress
                value={stats.applied}
                max={stats.total || 1}
              />
            </div>

            <div className="progress-row">
              <span>Interview</span>

              <progress
                value={stats.interview}
                max={stats.total || 1}
              />
            </div>

            <div className="progress-row">
              <span>Offers</span>

              <progress
                value={stats.offer}
                max={stats.total || 1}
              />
            </div>
          </div>

          <div className="dashboard-grid">

            <div className="glass card">
              <h2>📅 Upcoming Deadlines</h2>

              {deadlines.length === 0 ? (
                <p>No upcoming deadlines.</p>
              ) : (
                deadlines.map((item) => (
                  <div className="deadline" key={item.id}>
                    <strong>{item.company}</strong>

                    <p>{item.role}</p>

                    <span>
                      {new Date(item.deadline).toLocaleDateString()}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="glass card">
              <h2>✅ Completed Deadlines</h2>

              {completed.length === 0 ? (
                <p>No completed deadlines.</p>
              ) : (
                completed.map((item) => (
                  <div className="deadline" key={item.id}>
                    <strong>{item.company}</strong>

                    <p>{item.role}</p>

                    <span>
                      {new Date(item.deadline).toLocaleDateString()}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* <div className="glass card">
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
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;