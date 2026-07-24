const AIService = require("../services/aiService");

const analyzeResume = async (req, res) => {
  try {
    const { resume_text } = req.body;

    if (!resume_text) {
      return res.status(400).json({
        message: "Resume text required",
      });
    }

    const result = await AIService.analyzeResume(resume_text);

    console.log(result);

    const cleaned = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    res.json({
      analysis: JSON.parse(cleaned),
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "AI analysis failed",
    });
  }
};

module.exports = {
  analyzeResume,
};