const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  searchApplications,
  filterByStatus,
  getUpcomingDeadlines,
} = require("../controllers/applicationController");

router.post("/", verifyToken, createApplication);

router.get("/", verifyToken, getApplications);

router.get("/search", verifyToken, searchApplications);

router.get("/status/:status", verifyToken, filterByStatus);

router.get("/deadlines", verifyToken, getUpcomingDeadlines);

router.get("/:id", verifyToken, getApplicationById);

router.put("/:id", verifyToken, updateApplication);

router.delete("/:id", verifyToken, deleteApplication);

module.exports = router;