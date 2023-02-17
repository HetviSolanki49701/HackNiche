const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://mangodb:mangodb@cluster0.ejyqauq.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connected to Mongo");
  }
);
