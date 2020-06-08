const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a tables.html

router.get("/", function (req, res, next) {
  res.sendFile("tables.html", { root: "views" });
});

module.exports = router;
