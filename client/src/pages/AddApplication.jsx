import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { createApplication } from "../services/applicationService";

function AddApplication() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    deadline: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createApplication(form);

      alert("Application Added Successfully");

      navigate("/applications");
    } catch (err) {
      console.log(err);
      alert("Unable to add application");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">

        {/* Remove Navbar if you don't want the top logout button */}
        {/* <Navbar /> */}

        <div
  className="form-card"
  style={{
    width: "100%",
    margin: "0",
    padding: "45px",
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
            Add Application
          </h2>

          <form onSubmit={handleSubmit}>

            <div
            style={{
             display: "grid",
             gridTemplateColumns: "repeat(3, 1fr)",
             gap: "25px",
             marginTop: "35px",
             }}
             >
              <div>
                <label>Company</label>

                <input
                  name="company"
                  placeholder="Enter company name"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Role</label>

                <input
                  name="role"
                  placeholder="Enter role"
                  value={form.role}
                  onChange={handleChange}
                  required
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
                  placeholder="Remote / Hybrid / On-site"
                  value={form.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div
  style={{
    marginTop: "30px",
    width: "100%",
  }}
>
              <label>Notes</label>

              <textarea
                name="notes"
                rows="6"
                placeholder="Add any notes..."
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
                💾 Save Application
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default AddApplication;