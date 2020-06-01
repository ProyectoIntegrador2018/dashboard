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
    //console.log(data.length);
    resUp.json = data
    resUp.json.sort()
    var arrayfal = []
    for (var i = 0; i < data.length; i++){
      //arrayfal.push(resUp.json[i].count)
      arrayfal.push({year:resUp.json[i]._id.year,name:resUp.json[i]._id.month,data:resUp.json[i].count})
    }
    resUp = arrayfal
    console.log(resUp)
    //console.log(resUp.json[0]._id.month)
    //console.log(resUp.json[0]._id,resUp.json[0].count)
})});


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

var graficas = require("./routes/graficaFiltrosJSON");
app.use("/graficas",graficas)


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

*/
