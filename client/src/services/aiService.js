import api from "./api";

export const analyzeResume = async (resumeText) => {
  const response = await api.post("/ai/analyze", {
    resume_text: resumeText,
  });

  return response.data;
};