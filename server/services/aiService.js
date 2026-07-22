const analyzeResume = async (resumeText) => {

    // AI Resume Analysis Logic
    // Replace with external AI model later

    const skills = [
        "Java",
        "React",
        "Node.js",
        "MySQL"
    ];

    const missingSkills = [
        "Docker",
        "Cloud Deployment",
        "System Design"
    ];


    return JSON.stringify({

        score: 85,

        strong_skills: skills,

        missing_skills: missingSkills,

        suggestions: [
            "Add measurable achievements in projects",
            "Include internship experience",
            "Improve cloud and deployment skills"
        ],

        analyzed_text_length: resumeText.length

    });

};


module.exports = {
    analyzeResume
};