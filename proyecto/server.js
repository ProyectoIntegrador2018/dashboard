var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.set("views", path.join(__dirname + "/views"));
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", function (req, res, next) {
  res.sendFile("dashboard.html", { root: "views" });
});

var index = require("./routes/dashboard");
app.use("/dashboard", index);

var ruta1 = require("./routes/fallas");
app.use("/fallas", ruta1);

var ruta2 = require("./routes/ruta2");
app.use("/ruta2", ruta2);

var detalle = require("./routes/detalle");
app.use("/detalle", detalle);


app.listen(3000, function () {
  console.log("Server starting");
});
