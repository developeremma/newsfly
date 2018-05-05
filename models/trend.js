const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendSchema = new Schema({
  title: { type: String, required: true },
  tweet_volume: { type: Number },
  date: { type: Date, default: Date.now, expires: '12h'},
  city_id: { type: String }
});

const Trend = mongoose.model("Trend", trendSchema);

//module.exports = Trend;
module.exports = Trend;