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
    notes: ""

  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createApplication(form);

      alert("Application Added Successfully");

      navigate("/applications");

    }

    catch (err) {

      console.log(err);

      alert("Unable to add application");

    }

  };

  return (

    <div className="layout">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="auth-container">

          <h1>Add Application</h1>

          <form onSubmit={handleSubmit}>

            <input
              name="company"
              placeholder="Company"
              onChange={handleChange}
              required
            />

            <input
              name="role"
              placeholder="Role"
              onChange={handleChange}
              required
            />

            <select
              name="status"
              onChange={handleChange}
            >

              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>

            </select>

            <input
              type="date"
              name="deadline"
              onChange={handleChange}
            />

            <input
              name="location"
              placeholder="Location"
              onChange={handleChange}
            />

            <textarea

              name="notes"

              placeholder="Notes"

              rows="4"

              onChange={handleChange}

            />

            <button>

              Save Application

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default AddApplication;