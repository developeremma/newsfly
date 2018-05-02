const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Trend
      .find(req.query)
      .then(dbModel => {
          //console.log("I have find all res json in trendsController// i'm doing it on the 3035/api/trends")
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(trend) {
    db.Trend
      .create(trend)
      .catch(err => console.log(err));
  }
}