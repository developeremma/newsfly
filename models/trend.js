const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendSchema = new Schema({
  title: { type: String, required: true },
  tweet_volume: { type: Number },
  date: { type: Date, default: Date.now, expires: 60*60*3},
  city_id: [{ type: Schema.Types.ObjectId, ref: 'City' }]
});

const Trend = mongoose.model("Trend", trendSchema);

//module.exports = Trend;
module.exports = Trend;