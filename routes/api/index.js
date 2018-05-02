const router = require("express").Router();
const trendsRoutes = require("./trends");
const citiesRoutes = require("./cities");

// Trends routes
router.use("/trends", trendsRoutes);
router.use("/cities", citiesRoutes);

module.exports = router;
