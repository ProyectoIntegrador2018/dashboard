const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a dashboard.html

router.get("/", function (req, res, next) {
  res.sendFile("dashboard.html", { root: "views" });
});

module.exports = router;
