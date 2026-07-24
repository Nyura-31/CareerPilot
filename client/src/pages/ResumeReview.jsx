import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { analyzeResume } from "../services/aiService";

function ResumeReview() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState(null);

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

        <div className="form-card">

          <h1
            style={{
              textAlign: "center",
              color: "#355834",
              marginBottom: "30px",
            }}
          >
            🤖 AI Resume Review
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "25px",
            }}
          >
            Paste your resume below and receive AI-powered feedback.
          </p>

          <textarea
            className="resume-textarea"
            placeholder="Paste your complete resume here..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />

          <button
            className="btn btn-primary"
            style={{
              width: "100%",
              marginTop: "25px",
            }}
            onClick={handleAnalyze}
          >
            🚀 Analyze Resume
          </button>

          {result && (
            <div className="analysis-card">

              <h2>Resume Score</h2>

              <div className="score">
                {result.score}/100
              </div>

              <hr />

              <h3>✅ Strong Skills</h3>

              <ul>
                {result.strong_skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <h3>❌ Missing Skills</h3>

              <ul>
                {result.missing_skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>

              <h3>💡 Suggestions</h3>

              <ul>
                {result.suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default ResumeReview;