const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a detalle4.html

router.get("/", function (req, res, next) {
  res.sendFile("detalle4.html", { root: "views" });
});

module.exports = router;
