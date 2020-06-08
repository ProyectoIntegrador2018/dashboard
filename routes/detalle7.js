const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a detalle7.html

router.get("/", function (req, res, next) {
  res.sendFile("detalle7.html", { root: "views" });
});

module.exports = router;
