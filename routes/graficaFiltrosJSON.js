const express = require("express");
const router = express.Router();
var path = require("path");

//Ruta que redirecciona a graficaFiltrosJSON.html

router.get("/", function (req, res, next) {
  res.sendFile("graficaFiltrosJSON.html", { root: "views" });
});

module.exports = router;
