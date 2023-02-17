const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pensionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  applied: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "Not Applied",
  },
});

const pensions = mongoose.model("Pension", pensionSchema);

module.exports = pensions;
