const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a fallas.html

router.get("/", function (req, res, next) {
  res.sendFile("fallas.html", { root: "views" });
});

module.exports = router;
