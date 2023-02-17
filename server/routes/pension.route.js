const express = require("express");
const router = express.Router();
const pensions = require("../models/pension.model");
const fetchUser = require("../middleware/fetchUser");

router.post("/postpension", fetchUser, async (req, res) => {
  try {
    const pension = await pensions.create({
      title: req.body.title,
      description: req.body.description,
      amount: req.body.amount,
      applied: req.user.id,
    });
    res.json({ pension });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
});

router.get("/pensions", fetchUser, async (req, res) => {
  try {
    const pension = await pensions.find({ applied: req.user.id });
    res.json({ pension });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
});

module.exports = router;
