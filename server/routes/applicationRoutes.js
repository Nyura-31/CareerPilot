const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
} = require("../controllers/applicationController");

router.post("/", verifyToken, createApplication);

router.get("/", verifyToken, getApplications);

router.get("/:id", verifyToken, getApplicationById);

router.put("/:id", verifyToken, updateApplication);

router.delete("/:id", verifyToken, deleteApplication);

module.exports = router;