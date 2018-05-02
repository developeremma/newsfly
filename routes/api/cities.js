const router = require("express").Router();
const citiesController = require("../../controllers/cityController");

// Matches with "/api/cities"
router.route("/")
  .get(citiesController.findAll)

  module.exports = router