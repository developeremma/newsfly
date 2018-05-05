const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

userSchema.pre('save', function (next) {
  var user = this;
  console.log("user.password", user.password)
  console.log("typeof password ", typeof user.password)
  return bcrypt.hash(user.password, 10).then((hash) => {
    user.password = hash;
  }).catch(err => console.log(err))
});

//module.exports = User;
module.exports = User;