const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: { type: String, required: true },
  woeid: {type: Number, required: true},
  coordinates: { type: Object},
  magnitude: {type: Number}
});

const City = mongoose.model("City", citySchema);


module.exports = City