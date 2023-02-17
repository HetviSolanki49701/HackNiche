const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helperSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

const helpers = mongoose.model("Helper", helperSchema);

module.exports = helpers;
