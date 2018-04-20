const router = require("express").Router();
const trendsRoutes = require("./trends");

// Trends routes
router.use("/trends", trendsRoutes);

module.exports = router;
