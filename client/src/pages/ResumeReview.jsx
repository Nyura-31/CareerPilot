import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { analyzeResume } from "../services/aiService";

function ResumeReview() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = async () => {
    try {
      const data = await analyzeResume(resume);
      setResult(data.analysis);
    } catch (err) {
      alert("AI Analysis Failed");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h1>AI Resume Review</h1>

        <textarea
          rows="12"
          placeholder="Paste your resume here..."
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />

        <br />
        <br />

        <button
          className="action-btn"
          onClick={handleAnalyze}
        >
          Analyze Resume
        </button>

        {result && (
          <div className="card glass" style={{ marginTop: "30px" }}>
            <h2>AI Feedback</h2>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontFamily: "inherit",
              }}
            >
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeReview;