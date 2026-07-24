import { useNavigate } from "react-router-dom";
import { CalendarDays, CheckCircle2, Clock3, MapPin, Pencil, Trash2, XCircle } from "lucide-react";

function ApplicationCard({ app, onDelete }) {
  const navigate = useNavigate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const deadlineDate = new Date(app.deadline);
  deadlineDate.setHours(0, 0, 0, 0);
  const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
  const isCompleted = daysLeft < 0;

  return (
    <article className="application-card">
      <div className="application-card-head">
        <div><h2>{app.company}</h2><p className="role-label">{app.role}</p></div>
        <span className={`status status-${app.status.toLowerCase()}`}>{app.status}</span>
      </div>
      <div className="application-details">
        <p><CalendarDays size={16} /><span>{app.deadline ? new Date(app.deadline).toLocaleDateString() : "No deadline"}</span></p>
        <p><MapPin size={16} /><span>{app.location || "Location not specified"}</span></p>
      </div>
      <p className={`deadline-state ${app.status === "Offer" ? "success" : app.status === "Rejected" ? "danger" : isCompleted ? "muted" : ""}`}>
        {app.status === "Offer" ? <><CheckCircle2 size={16} /> Offer received</> : app.status === "Rejected" ? <><XCircle size={16} /> Application rejected</> : isCompleted ? <><Clock3 size={16} /> Deadline completed</> : <><Clock3 size={16} /> {daysLeft} day{daysLeft !== 1 ? "s" : ""} remaining</>}
      </p>
      {app.notes && <p className="notes-preview">{app.notes}</p>}
      <div className="application-footer">
        <button className="btn btn-secondary" onClick={() => navigate(`/edit/${app.id}`)}><Pencil size={16} /> Edit</button>
        <button className="btn btn-danger" onClick={() => onDelete(app.id)}><Trash2 size={16} /> Delete</button>
      </div>
    </article>
  );
}

export default ApplicationCard;
