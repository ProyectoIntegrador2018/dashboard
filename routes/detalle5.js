const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a detalle5.html

router.get("/", function (req, res, next) {
  res.sendFile("detalle5.html", { root: "views" });
});

module.exports = router;
