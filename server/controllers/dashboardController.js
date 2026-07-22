const db = require("../config/db");

const getDashboardStats = (req, res) => {
  const userId = req.user.id;

  const sql = `
    SELECT
      COUNT(*) AS total,
      SUM(status='Applied') AS applied,
      SUM(status='Interview') AS interview,
      SUM(status='Offer') AS offer,
      SUM(status='Rejected') AS rejected
    FROM applications
    WHERE user_id = ?
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results[0]);
  });
};

module.exports = {
  getDashboardStats,
};