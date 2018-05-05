const db = require("../models");


module.exports = {
  findAll: function(req, res) {
      console.log("I'm in the city findall function")
      console.log("req.query ", req.query)
    db.City
      .find(req.query)
      .then(dbModel => {
        res.json(dbModel)
        console.log(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(city) {
      console.log("I'm in city create function")
    db.City
      .create(city)
      .catch(err => console.log(err));
  },

  findCity: function(req, res) {
    var city_id = req.params.city_id
    db.City.findById({_id: city_id}).then(response => res.json(response))
    }
}