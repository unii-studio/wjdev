const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    status: `Hi :>`
  });
});

router.get("/status", (req, res) => {
  res.send({
    status: `Connected to the backend at ${process.env.API_URL}`
  });
});

router.post("/", (req, res) => {
  res.send({
    message: "A POST request was made to the server"
  });
});

module.exports = router;
