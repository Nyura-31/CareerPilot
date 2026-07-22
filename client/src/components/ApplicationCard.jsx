import { useNavigate } from "react-router-dom";

function ApplicationCard({ app, onDelete }) {

  const navigate = useNavigate();

  return (
    <div className="card glass">

      <h2>{app.company}</h2>

      <p><strong>Role:</strong> {app.role}</p>

      <p>
        <strong>Status:</strong>{" "}
        <span className={`status ${app.status.toLowerCase()}`}>
          {app.status}
        </span>
      </p>

      <p>
        <strong>Deadline:</strong>{" "}
        {new Date(app.deadline).toLocaleDateString()}
      </p>

      <p><strong>Location:</strong> {app.location}</p>

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