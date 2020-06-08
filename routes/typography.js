const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a typography.html

router.get("/", function (req, res, next) {
  res.sendFile("typography.html", { root: "views" });
});

module.exports = router;
