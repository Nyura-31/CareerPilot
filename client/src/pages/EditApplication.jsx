import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Save } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { getApplicationById, updateApplication } from "../services/applicationService";

function EditApplication() {
  const { id } = useParams(); const navigate = useNavigate(); const [form, setForm] = useState({ company: "", role: "", status: "Applied", deadline: "", location: "", notes: "" });
  useEffect(() => { loadApplication(); }, []);
  const loadApplication = async () => { try { const data = await getApplicationById(id); setForm({ company: data.company || "", role: data.role || "", status: data.status || "Applied", deadline: data.deadline ? data.deadline.split("T")[0] : "", location: data.location || "", notes: data.notes || "" }); } catch (err) { console.log(err); alert("Unable to load application"); } };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => { e.preventDefault(); try { await updateApplication(id, form); alert("Application Updated Successfully"); navigate("/applications"); } catch (err) { console.log(err); alert("Unable to update application"); } };
  return <div className="layout"><Sidebar /><main className="main"><section className="form-card"><header className="form-header"><p className="eyebrow">APPLICATION DETAILS</p><h1>Edit application</h1><p>Keep your opportunity details accurate as things progress.</p></header><form onSubmit={handleSubmit}><div className="form-grid"><label>Company<input name="company" value={form.company} onChange={handleChange} /></label><label>Role<input name="role" value={form.role} onChange={handleChange} /></label><label>Status<select name="status" value={form.status} onChange={handleChange}><option>Applied</option><option>Interview</option><option>Offer</option><option>Accepted</option><option>Rejected</option></select></label><label>Deadline<input type="date" name="deadline" value={form.deadline} onChange={handleChange} /></label><label>Location<input name="location" value={form.location} onChange={handleChange} /></label></div><label className="form-field-wide">Notes<textarea rows="6" name="notes" value={form.notes} onChange={handleChange} /></label><div className="form-actions"><button className="btn btn-secondary" type="button" onClick={() => navigate("/applications")}>Cancel</button><button className="btn btn-primary"><Save size={17} /> Update application</button></div></form></section></main></div>;
}
export default EditApplication;
