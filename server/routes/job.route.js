const express = require("express");
const router = express.Router();
const jobs = require("../models/job.model");
const fetchhelper = require("../middleware/fetchHelper");
const fetchUser = require("../middleware/fetchUser");

router.post("/postjob", fetchhelper, async (req, res) => {
  try {
    const job = await jobs.create({
      title: req.body.title,
      description: req.body.description,
      noOfOpenings: req.body.noOfOpenings,
      location: req.body.location,
      salary: req.body.salary,
      postedBy: req.helper.id,
    });
    res.json({ job });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
});

router.get("/applyjob", fetchUser, async (req, res) => {
  try {
    const job = await jobs.findOneAndUpdate(
      { _id: req.body.id },
      { $push: { applied: req.user.id } }
    );

    res.json({ job });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
});

router.get("/getjobs", fetchhelper, async (req, res) => {
  try {
    const job = await jobs.find({ postedBy: req.helper.id });

    res.json({ job });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
});

router.get("/appliedjobs", fetchUser, async (req, res) => {
  try {
    let job = await jobs.find({ applied: { $in: req.user.id } });
    res.json({ job });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: error });
  }
});

router.get("/notappliedjobs", fetchUser, async (req, res) => {
  try {
    let job = await jobs.find({ applied: { $nin: req.user.id } });
    res.json({ job });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: error });
  }
});

module.exports = router;
