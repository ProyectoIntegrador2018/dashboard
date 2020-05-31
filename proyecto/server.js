var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const db = require('./db.js')
//const model = require('./model.js')
app.set("views", path.join(__dirname + "/views"));
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", function (req, res, next) {
  res.sendFile("dashboard.html", { root: "views" });
});

var index = require("./routes/dashboard");
app.use("/dashboard", index);

var ruta1 = require("./routes/fallas");
app.use("/fallas", ruta1);

var ruta2 = require("./routes/tablelist");
app.use("/tablelist", ruta2);

var ruta3 = require("./routes/notifications");
app.use("/notifications", ruta3);

var ruta4 = require("./routes/users");
app.use("/users", ruta4);

var ruta5 = require("./routes/icons");
app.use("/icons", ruta5);

var ruta6 = require("./routes/typography");
app.use("/typography", ruta6);

var detalle = require("./routes/detalle");
app.use("/detalle", detalle);


app.listen(3000, function () {
  console.log("Server starting");
});


/*
//Watch File running

const { exec } = require("child_process");

	exec("pm2 start watchFile.js -f", (error, stdout, stderr) => {
	    if (error) {
		console.log(`error: ${error.message}`);
		return;
	    }
	    if (stderr) {
		console.log(`stderr: ${stderr}`);
		return;
	    }
	    console.log('Watchfile executed! Try adding changes!');
	});

  var chartSchema = new Schema({
  	_id: String,
  	Tipo de Falla: String,
  	Variable: String,
  	Fecha Inicio: Date,
  	Fecha Final: Date,
  	Valor: Double
  })

  var Chart = mongoose.model('Chart', chartSchema);
*/
