require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./config/db");

const authRoutes = require("./routes/authRoutes");
const verifyToken = require("./middleware/authMiddleware");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("CareerPilot API Running...");
});

const PORT = process.env.PORT || 5000;

app.get("/api/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected Route Accessed Successfully",
    user: req.user,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});