const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a detalle6.html

router.get("/", function (req, res, next) {
  res.sendFile("detalle6.html", { root: "views" });
});

module.exports = router;
