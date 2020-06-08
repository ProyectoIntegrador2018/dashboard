const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a detalle8.html

router.get("/", function (req, res, next) {
  res.sendFile("detalle8.html", { root: "views" });
});

module.exports = router;
