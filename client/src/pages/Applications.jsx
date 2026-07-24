import { useEffect, useState } from "react";
import { Plus, BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getApplications, deleteApplication } from "../services/applicationService";
import Sidebar from "../components/Sidebar";
import ApplicationCard from "../components/ApplicationCard";

function Applications() {
  const navigate = useNavigate(); const [applications, setApplications] = useState([]);
  useEffect(() => { loadApplications(); }, []);
  const loadApplications = async () => { try { setApplications(await getApplications()); } catch (err) { console.log(err); } };
  const handleDelete = async (id) => { if (!window.confirm("Delete this application?")) return; try { await deleteApplication(id); loadApplications(); } catch (err) { console.log(err); alert("Unable to delete application"); } };
  return <div className="layout"><Sidebar /><main className="main"><header className="page-header"><div><p className="eyebrow">PIPELINE</p><h1>Applications</h1><p>Track every opportunity from application to offer.</p></div><button className="btn btn-primary" onClick={() => navigate("/add")}><Plus size={17} /> Add application</button></header>{applications.length === 0 ? <section className="empty-state"><BriefcaseBusiness size={32} /><h2>No applications yet</h2><p>Start tracking your internship opportunities in one place.</p><button className="btn btn-primary" onClick={() => navigate("/add")}><Plus size={17} /> Add your first application</button></section> : <section className="application-grid">{applications.map((app) => <ApplicationCard key={app.id} app={app} onDelete={handleDelete} />)}</section>}</main></div>;
}
export default Applications;
