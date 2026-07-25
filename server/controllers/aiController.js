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

    console.log("AI RESPONSE:", result);

    let cleaned = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Extract JSON part if AI adds extra text
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");

    if (start !== -1 && end !== -1) {
      cleaned = cleaned.substring(start, end + 1);
    }

    const analysis = JSON.parse(cleaned);

    res.json({
      analysis,
    });

  } catch (error) {
    console.log("AI ERROR:", error.message);

    res.status(500).json({
      message: "AI analysis failed",
    });
  }
};

module.exports = {
  analyzeResume,
};


// const AIService = require("../services/aiService");

// const analyzeResume = async (req, res) => {
//   try {
//     const { resume_text } = req.body;

//     if (!resume_text) {
//       return res.status(400).json({
//         message: "Resume text required",
//       });
//     }

//     const result = await AIService.analyzeResume(resume_text);

//     console.log(result);

//     const cleaned = result
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     res.json({
//       analysis: JSON.parse(cleaned),
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       message: "AI analysis failed",
//     });
//   }
// };

// module.exports = {
//   analyzeResume,
// };