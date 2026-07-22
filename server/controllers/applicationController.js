const Application = require("../models/applicationModel");

// Create
const createApplication = (req, res) => {
  const application = {
    user_id: req.user.id,
    ...req.body,
  };

  Application.createApplication(application, (err) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Application Added Successfully",
    });
  });
};

// Get All
const getApplications = (req, res) => {
  Application.getApplications(req.user.id, (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};

// Get One
const getApplicationById = (req, res) => {
  Application.getApplicationById(
    req.params.id,
    req.user.id,
    (err, results) => {
      if (err) return res.status(500).json(err);

      res.json(results[0]);
    }
  );
};

// Update
const updateApplication = (req, res) => {
  Application.updateApplication(
    req.params.id,
    req.user.id,
    req.body,
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Application Updated Successfully",
      });
    }
  );
};

// Delete
const deleteApplication = (req, res) => {
  Application.deleteApplication(
    req.params.id,
    req.user.id,
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Application Deleted Successfully",
      });
    }
  );
};

module.exports = {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
};