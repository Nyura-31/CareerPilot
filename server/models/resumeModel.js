const db = require("../config/db");


const createResume = (resumeData, callback) => {

    const sql = `
    INSERT INTO resumes
    (user_id, resume_name, resume_link, version)
    VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            resumeData.user_id,
            resumeData.resume_name,
            resumeData.resume_link,
            resumeData.version
        ],
        callback
    );
};



const getResumes = (userId, callback) => {

    const sql = `
    SELECT * FROM resumes
    WHERE user_id = ?
    `;

    db.query(sql, [userId], callback);
};



const updateResume = (id, data, callback) => {

    const sql = `
    UPDATE resumes
    SET resume_name=?, resume_link=?, version=?
    WHERE id=?
    `;

    db.query(
        sql,
        [
            data.resume_name,
            data.resume_link,
            data.version,
            id
        ],
        callback
    );
};



const deleteResume = (id, callback) => {

    const sql = `
    DELETE FROM resumes
    WHERE id=?
    `;

    db.query(sql,[id],callback);
};



module.exports = {
    createResume,
    getResumes,
    updateResume,
    deleteResume
};