const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a notifications.html

router.get("/", function (req, res, next) {
  res.sendFile("notifications.html", { root: "views" });
});

module.exports = router;
