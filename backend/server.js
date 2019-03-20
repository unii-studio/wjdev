const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Routes
const home = require("./routes/home");

// Connect to the database
const options = { useNewUrlParser: true };
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:/reactable", options)
  .then(() => console.log("connected successfully"))
  .catch(err => console.log("An error occurred", err));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

app.listen(port, () =>
  console.log(
    `server is running on port ${process.env.API_URL ||
      "http://localhost:5000"} `
  )
);
