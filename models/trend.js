const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendSchema = new Schema({
  title: { type: String, required: true },
  tweet_volume: { type: Number },
  country_id: {type: Number, required: true}
});

const Trend = mongoose.model("Trend", trendSchema);

module.exports = Trend;