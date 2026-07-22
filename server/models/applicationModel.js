const db = require("../config/db");

// Create
const createApplication = (application, callback) => {
  const sql = `
    INSERT INTO applications
    (user_id, company, role, status, deadline, location, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      application.user_id,
      application.company,
      application.role,
      application.status,
      application.deadline,
      application.location,
      application.notes,
    ],
    callback
  );
};

// Get All
const getApplications = (userId, callback) => {
  const sql = "SELECT * FROM applications WHERE user_id = ?";
  db.query(sql, [userId], callback);
};

// Get One
const getApplicationById = (id, userId, callback) => {
  const sql =
    "SELECT * FROM applications WHERE id = ? AND user_id = ?";
  db.query(sql, [id, userId], callback);
};

// Update
const updateApplication = (id, userId, application, callback) => {
  const sql = `
    UPDATE applications
    SET company=?, role=?, status=?, deadline=?, location=?, notes=?
    WHERE id=? AND user_id=?
  `;

  db.query(
    sql,
    [
      application.company,
      application.role,
      application.status,
      application.deadline,
      application.location,
      application.notes,
      id,
      userId,
    ],
    callback
  );
};

// Delete
const deleteApplication = (id, userId, callback) => {
  const sql =
    "DELETE FROM applications WHERE id=? AND user_id=?";
  db.query(sql, [id, userId], callback);
};

const searchApplications = (userId, company, callback) => {
  const sql = `
    SELECT * FROM applications
    WHERE user_id = ? AND company LIKE ?
  `;

  db.query(sql, [userId, `%${company}%`], callback);
};

const filterByStatus = (userId, status, callback) => {
  const sql = `
    SELECT * FROM applications
    WHERE user_id = ? AND status = ?
  `;

  db.query(sql, [userId, status], callback);
};

const getUpcomingDeadlines = (userId, callback) => {
  const sql = `
    SELECT *
    FROM applications
    WHERE user_id = ?
    ORDER BY deadline ASC
  `;

  db.query(sql, [userId], callback);
};

module.exports = {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  searchApplications,
  filterByStatus,
  getUpcomingDeadlines,
};