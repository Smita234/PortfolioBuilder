const { stringify } = require("nodemon/lib/utils");
const mongoose = require("../connection");

const schema = mongoose.Schema({
  title: { type: String, require: true },
  image: String,
  cvimage: String,
  links: Array,
  description: String,
  work:Array,
  user: { type: mongoose.Types.ObjectId, ref: 'users' },
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("portfolios", schema);

module.exports = model;