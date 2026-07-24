import { useNavigate } from "react-router-dom";

function ApplicationCard({ app, onDelete }) {
  const navigate = useNavigate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadlineDate = new Date(app.deadline);
  deadlineDate.setHours(0, 0, 0, 0);

  const diffTime = deadlineDate - today;
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const isCompleted = daysLeft < 0;

  return (
    <div className="card glass">
      <h2>{app.company}</h2>

      <p>
        <strong>Role:</strong> {app.role}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span
          style={{
            fontWeight: "600",
            color:
              app.status === "Offer"
                ? "#16a34a"
                : app.status === "Rejected"
                ? "#dc2626"
                : "#355834",
          }}
        >
          {app.status}
        </span>
      </p>

      <p>
        <strong>Deadline:</strong> {app.deadline}
      </p>

      <p
        style={{
          marginTop: "8px",
          fontWeight: "600",
          color:
            app.status === "Offer"
              ? "#16a34a"
              : app.status === "Rejected"
              ? "#dc2626"
              : isCompleted
              ? "#6b7280"
              : "#16a34a",
        }}
      >
        {app.status === "Offer"
          ? "🎉 Offer Received"
          : app.status === "Rejected"
          ? "❌ Application Rejected"
          : isCompleted
          ? "⏳ Completed"
          : `🟢 ${daysLeft} day${daysLeft !== 1 ? "s" : ""} remaining`}
      </p>

      <p>
        <strong>Location:</strong> {app.location}
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          className="action-btn"
          onClick={() => navigate(`/edit/${app.id}`)}
        >
          Edit
        </button>

        <button
          className="action-btn"
          onClick={() => onDelete(app.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ApplicationCard;