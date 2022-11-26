const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(res.body);
  res.send("<h1>안녕</h1>");
});

module.exports = router;
