const axios = require("axios");

const analyzeResume = async (resumeText) => {
  const prompt = `
You are an expert ATS Resume Reviewer.

Analyze the following resume.

Return ONLY a valid JSON object.

Do not use markdown.
Do not use code fences.
Do not write any explanation.

Return exactly this structure:

{
  "score": 90,
  "strong_skills": [],
  "missing_skills": [],
  "suggestions": []
}

Resume:

${resumeText}
`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (err) {
    console.log("STATUS:", err.response?.status);
    console.log("DATA:", err.response?.data);
    throw err;
  }
};

module.exports = {
  analyzeResume,
};