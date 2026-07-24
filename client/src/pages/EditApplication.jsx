import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import {
  getApplicationById,
  updateApplication,
} from "../services/applicationService";

function EditApplication() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    deadline: "",
    location: "",
    notes: "",
  });

  useEffect(() => {
    loadApplication();
  }, []);

  const loadApplication = async () => {
    try {
      const data = await getApplicationById(id);

      setForm({
        company: data.company || "",
        role: data.role || "",
        status: data.status || "Applied",
        deadline: data.deadline
          ? data.deadline.split("T")[0]
          : "",
        location: data.location || "",
        notes: data.notes || "",
      });
    } catch (err) {
      console.log(err);
      alert("Unable to load application");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateApplication(id, form);

      alert("Application Updated Successfully");

      navigate("/applications");
    } catch (err) {
      console.log(err);
      alert("Unable to update application");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <div
          className="form-card"
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              color: "#355834",
              marginBottom: "40px",
            }}
          >
            Edit Application
          </h2>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "25px",
              }}
            >
              <div>
                <label>Company</label>

                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Role</label>

                <input
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Status</label>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option>Applied</option>
                  {/* <option>Under Review</option> */}
                  {/* <option>Shortlisted</option> */}
                  {/* <option>Assessment</option> */}
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                  {/* <option>Withdrawn</option> */}
                </select>
              </div>

              <div>
                <label>Deadline</label>

                <input
                  type="date"
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Location</label>

                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <label>Notes</label>

              <textarea
                rows="6"
                name="notes"
                value={form.notes}
                onChange={handleChange}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <button
                className="btn btn-primary"
                style={{
                  width: "260px",
                  fontSize: "17px",
                }}
              >
                💾 Update Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditApplication;