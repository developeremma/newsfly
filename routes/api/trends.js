const router = require("express").Router();
const trendsController = require("../../controllers/trendsController");

// Matches with "/api/trends"
router.route("/")
  .get(trendsController.findAll)

  module.exports = router