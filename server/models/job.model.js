const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  noOfOpenings: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  applied: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Helper",
  },
});

const jobs = mongoose.model("Job", jobSchema);

module.exports = jobs;
