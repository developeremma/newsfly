const router = require("express").Router();
const trendsController = require("../../controllers/trendsController");

// Matches with "/api/trends"
router.route("/")
  .get(trendsController.findAll)

router.route("/:city_id")
  .get(trendsController.findByCity)

  module.exports = router