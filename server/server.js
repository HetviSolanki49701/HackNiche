const express = require("express");
require("./db");
require("dotenv").config();
const cors = require("cors");
const app = express();

const userRouter = require("./routes/user.route");
const helperRouter = require("./routes/helper.route");
const jobRouter = require("./routes/job.route");
const pensionRouter = require("./routes/pension.route");

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(helperRouter);
app.use(jobRouter);
app.use(pensionRouter);

const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
