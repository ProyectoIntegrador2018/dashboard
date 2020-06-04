const express = require("express");
const router = express.Router();
var path = require("path");

router.get("/", function (req, res, next) {
  res.sendFile("detalle3.html", { root: "views" });
});

module.exports = router;
