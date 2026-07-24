import { useEffect, useState } from "react";

import {
  getApplications,
  deleteApplication,
} from "../services/applicationService";

import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import ApplicationCard from "../components/ApplicationCard";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const data = await getApplications();
      setApplications(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this application?")) return;

    try {
      await deleteApplication(id);
      loadApplications();
    } catch (err) {
      console.log(err);
      alert("Unable to delete application");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h1>Applications</h1>
        </div>

        {applications.length === 0 ? (
          <div className="card glass">
            <h2>No Applications Yet</h2>

            <p>
              Go to <strong>Add Application</strong> from the sidebar to start
              tracking your internship applications.
            </p>
          </div>
        ) : (
          <div className="cards">
            {applications.map((app) => (
              <ApplicationCard
                key={app.id}
                app={app}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Applications;