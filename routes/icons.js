const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a icons.html

router.get("/", function (req, res, next) {
  res.sendFile("icons.html", { root: "views" });
});

module.exports = router;
