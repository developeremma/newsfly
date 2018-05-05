const path = require("path");
const router = require("express").Router();

const trendsRoutes = require("./api/trends");
const citiesRoutes = require("./api/cities");
const auth = require("./auth");

// API Routes
router.use("/api/trends", trendsRoutes);
router.use("/api/cities", citiesRoutes);
router.use("/", auth);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
