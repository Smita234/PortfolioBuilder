const mongoose = require("../connection");

const schema = mongoose.Schema({
  title: { type: String, require: true },
  image: String,
  heroimage: String,
  links: Array,
  description: String,
  work:Array,
  email: String,
  username: String,
  password: String,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("portfolios", schema);

module.exports = model;