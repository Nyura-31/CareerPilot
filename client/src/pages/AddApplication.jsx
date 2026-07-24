import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { createApplication } from "../services/applicationService";

function AddApplication() {
  const navigate = useNavigate(); const [form, setForm] = useState({ company: "", role: "", status: "Applied", deadline: "", location: "", notes: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => { e.preventDefault(); try { await createApplication(form); alert("Application Added Successfully"); navigate("/applications"); } catch (err) { console.log(err); alert("Unable to add application"); } };
  return <div className="layout"><Sidebar /><main className="main"><section className="form-card"><header className="form-header"><p className="eyebrow">NEW OPPORTUNITY</p><h1>Add application</h1><p>Save the key details now, then keep your progress up to date.</p></header><form onSubmit={handleSubmit}><div className="form-grid"><label>Company<input name="company" placeholder="e.g. Acme Inc." value={form.company} onChange={handleChange} required /></label><label>Role<input name="role" placeholder="e.g. Product Design Intern" value={form.role} onChange={handleChange} required /></label><label>Status<select name="status" value={form.status} onChange={handleChange}><option>Applied</option><option>Interview</option><option>Offer</option><option>Accepted</option><option>Rejected</option></select></label><label>Deadline<input type="date" name="deadline" value={form.deadline} onChange={handleChange} /></label><label>Location<input name="location" placeholder="Remote, hybrid, or city" value={form.location} onChange={handleChange} /></label></div><label className="form-field-wide">Notes<textarea name="notes" rows="6" placeholder="Add interview details, links, follow-ups, or anything worth remembering..." value={form.notes} onChange={handleChange} /></label><div className="form-actions"><button className="btn btn-secondary" type="button" onClick={() => navigate("/applications")}>Cancel</button><button className="btn btn-primary"><Save size={17} /> Save application</button></div></form></section></main></div>;
}
export default AddApplication;
