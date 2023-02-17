const express = require("express");
const helpers = require("../models/helper.model");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
// const fetchhelper = require("../middleware/fetchhelper");

router.post("/registerhelper", async (req, res) => {
  let success = false;
  try {
    let helper = await helpers.findOne({ email: req.body.email });

    if (helper) {
      res.status(400).json({ success, error: "Email ID already used" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    helper = await helpers.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
      number: req.body.number,
    });
    const data = {
      helper: {
        id: helper.id,
      },
    };

    const authToken = jwt.sign(data, "hetvi");

    success = true;
    res.json({ success, authToken });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
});

router.post(
  "/loginhelper",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let helper = await helpers.findOne({ email: req.body.email });

      if (!helper) {
        res.status(400).json({ success, error: "Email ID does not exist" });
      } else {
        const checkPass = bcrypt.compareSync(
          req.body.password,
          helper.password
        );
        if (checkPass) {
          const data = {
            helper: {
              id: helper.id,
            },
          };
          const authToken = jwt.sign(data, "hetvi");
          success = true;
          res.json({ success, authToken });
        }
      }
    } catch (err) {
      console.log(err);
      res.json({ status: "error", error: err });
    }
  }
);

// router.get("/fetchhelperById", async (req, res) => {
//   try {
//     let data = await helpers.findOne({ _id: req.headers.id });
//     res.json({ data });
//   } catch (error) {
//     console.log(error);
//     res.json({ status: "error", error: error });
//   }
// });

// router.get("/fetchAllMedicineshelper", fetchhelper, async (req, res) => {
//   try {
//     let meds = await medicines.find({
//       ownedby: { $exists: true },
//       sendto: { $exists: false },
//     });
//     res.json({ meds });
//   } catch (error) {
//     console.log(error);
//     res.json({ status: "error", error: error });
//   }
// });

// router.get("/getMedicinehelper", fetchhelper, async (req, res) => {
//   try {
//     let medicine = await medicines.findOneAndUpdate(
//       { _id: req.body.id },
//       {
//         sendto: req.helper.id,
//       }
//     );

//     let helper = await helpers.findOneAndUpdate(
//       { _id: req.helper.id },
//       {
//         $push: { medicine: req.body.id },
//       }
//     );

//     res.json({ success: true });
//   } catch (err) {
//     console.log(err);
//     res.json({ status: "error", error: err });
//   }
// });

module.exports = router;
