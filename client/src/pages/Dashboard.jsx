import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BriefcaseBusiness, CalendarDays, CheckCircle2, FilePlus2, Handshake, Sparkles, UserRoundCheck } from "lucide-react";
import { getDashboardStats, getUpcomingDeadlines } from "../services/dashboardService";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ total: 0, applied: 0, interview: 0, offer: 0, rejected: 0 });
  const [deadlines, setDeadlines] = useState([]);
  const [completed, setCompleted] = useState([]);
  useEffect(() => { loadDashboard(); }, []);

  const loadDashboard = async () => {
    try {
      const statData = await getDashboardStats();
      const deadlineData = await getUpcomingDeadlines();
      setStats({ total: statData.total || 0, applied: statData.applied || 0, interview: statData.interview || 0, offer: statData.offer || 0, rejected: statData.rejected || 0 });
      const today = new Date(); today.setHours(0, 0, 0, 0);
      setDeadlines(deadlineData.filter((item) => { const date = new Date(item.deadline); date.setHours(0, 0, 0, 0); return date >= today; }));
      setCompleted(deadlineData.filter((item) => { const date = new Date(item.deadline); date.setHours(0, 0, 0, 0); return date < today; }));
    } catch (err) { console.log(err); }
  };

  const cards = [
    { title: "Applications", value: stats.total, icon: BriefcaseBusiness, tone: "green" },
    { title: "Applied", value: stats.applied, icon: CheckCircle2, tone: "gold" },
    { title: "Interview", value: stats.interview, icon: UserRoundCheck, tone: "violet" },
    { title: "Offers", value: stats.offer, icon: Handshake, tone: "mint" },
  ];
  const progress = [["Applied", stats.applied, "applied"], ["Interview", stats.interview, "interview"], ["Offers", stats.offer, "offer"]];
  const Timeline = ({ items, empty, completed: isComplete = false }) => <div className="timeline-list">{items.length === 0 ? <p className="empty-copy">{empty}</p> : items.map((item) => <div className="timeline-item" key={item.id}><span className={`timeline-dot${isComplete ? " done" : ""}`} /><div><strong>{item.company}</strong><p>{item.role}</p></div><time>{new Date(item.deadline).toLocaleDateString()}</time></div>)}</div>;

  return <div className="layout"><Sidebar /><main className="main"><section className="dashboard">
    <div className="page-intro"><div><p className="eyebrow">OVERVIEW</p><h1>Welcome back</h1><p className="subtitle">Your internship search, organized in one calm workspace.</p></div><span className="intro-icon"><Sparkles size={22} /></span></div>
    <div className="stat-grid">{cards.map(({ title, value, icon: Icon, tone }) => <div key={title} className="stat-card"><span className={`stat-icon ${tone}`}><Icon size={21} /></span><div><p>{title}</p><h2>{value}</h2></div></div>)}</div>
    <section className="surface progress-card"><div className="section-heading"><div><h2>Application progress</h2><p>See how your pipeline is moving.</p></div><span>{stats.total} total</span></div>{progress.map(([label, value, type]) => <div className="progress-row" key={label}><div><span>{label}</span><strong>{value}</strong></div><div className="progress-track"><span className={`progress-fill ${type}`} style={{ width: `${(value / (stats.total || 1)) * 100}%` }} /></div></div>)}</section>
    <div className="dashboard-grid"><section className="surface"><div className="section-heading"><div><h2>Upcoming deadlines</h2><p>Keep important dates in view.</p></div><CalendarDays size={20} /></div><Timeline items={deadlines} empty="No upcoming deadlines." /></section><section className="surface"><div className="section-heading"><div><h2>Completed deadlines</h2><p>Your finished application windows.</p></div><CheckCircle2 size={20} /></div><Timeline items={completed} empty="No completed deadlines." completed /></section></div>
    <section className="quick-actions"><button className="quick-action" onClick={() => navigate("/add")}><FilePlus2 size={20} /><span><strong>Add application</strong><small>Track a new opportunity</small></span></button><button className="quick-action" onClick={() => navigate("/applications")}><BriefcaseBusiness size={20} /><span><strong>View applications</strong><small>Manage your pipeline</small></span></button><button className="quick-action" onClick={() => navigate("/resume-review")}><Sparkles size={20} /><span><strong>Review resume</strong><small>Get AI-powered feedback</small></span></button></section>
  </section></main></div>;
}
export default Dashboard;
