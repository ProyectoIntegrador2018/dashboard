const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a user.html

router.get("/", function (req, res, next) {
  res.sendFile("user.html", { root: "views" });
});

module.exports = router;
