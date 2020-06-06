var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var request = require('request');
var cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const url = 'mongodb+srv://admin:Admin_DB_Cluster123*@cluster0-k2ozl.mongodb.net/ternium?retryWrites=true&w=majority'

mongoose.connect(url)
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

const Fallas = new Schema ({
        _id: { type: String, requried: true },
        tipo: { type: String, required: true },
        variable: { type: String, required: true},
        fecha_inicio: { type: Date, required: true },
	      fecha_fin: {type: Date, required: true},
	      valor: {type: Number, required: true}
});

Fallasmodel = mongoose.model('fallasnuevas', Fallas)

app.get('/readDataFromDB', function (reqUp,resUp){
  regresa = []

  Fallasmodel.aggregate([{
    $group:
    {
      _id :{fallas:"$Tipo de Falla", month: { $month: "$Fecha Inicio" },year:{$year:"$Fecha Inicio"}}, count: { $sum: 1 }
    }
  }], function(err, data) { //Data represents the data fetched from the DB
    if (err) {
      return resUp.send({
        status: err
      });
    }
    console.log(data);
    regresa.push(data)
    //return resUp.json(data)
    //console.log(resUp.json)
    //resUp.sendFile("dashboard.html", { root: "views" });
    //console.log(resUp.json[0]._id.month)
    //console.log(resUp.json[0]._id,resUp.json[0].count)
  });

  Fallasmodel.aggregate([{
    $group:
    {
      _id :{fallas:"$Tipo de Falla", month: { $month: "$Fecha Inicio" },year:{$year:"$Fecha Inicio"}, variable:"$Variable"}, count: { $sum: 1 }
    }
  }], function(err, data) { //Data represents the data fetched from the DB
    if (err) {
      return resUp.send({
        status: err
      });
    }
    console.log(data);
    regresa.push(data);

    return resUp.json(regresa)
    //console.log(resUp.json)
    //resUp.sendFile("dashboard.html", { root: "views" });
    //console.log(resUp.json[0]._id.month)
    //console.log(resUp.json[0]._id,resUp.json[0].count)
  });
});


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
app.use("/preparacion-equipos", detalle);

var detalle2 = require("./routes/detalle2");
app.use("/fallas-mecanicas", detalle2);

var detalle3 = require("./routes/detalle3");
app.use("/fallas-electricas", detalle3);

var detalle4 = require("./routes/detalle4");
app.use("/fallas-de-operacion", detalle4);

var detalle5 = require("./routes/detalle5");
app.use("/edificios", detalle5);

var detalle6 = require("./routes/detalle5");
app.use("/servicios-centrales", detalle6);

var detalle7 = require("./routes/detalle6");
app.use("/botarse-molino", detalle7);

var detalle8 = require("./routes/detalle7");
app.use("/botarse-motor", detalle8);

var detalle9 = require("./routes/detalle8");
app.use("/alineacion", detalle9);

var detalle10 = require("./routes/detalle9");
app.use("/ajuste", detalle10);

var detalle11 = require("./routes/detalle10");
app.use("/rodillos-defectuosos", detalle11);

var detalle12 = require("./routes/detalle10");
app.use("/servicios-operacion", detalle12);

var detalle13 = require("./routes/detalle11");
app.use("/coordinacion-personal", detalle13);

var graficas = require("./routes/graficaFiltrosJSON");
app.use("/graficas",graficas)


app.listen(process.env.PORT || 3000, function () {
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
*/
