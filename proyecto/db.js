const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const mongoose = require('mongoose');
var Schema = mongoose.Schema
const ObjectID = mongodb.ObjectID

const url = 'mongodb+srv://admin:Admin_DB_Cluster123*@cluster0-k2ozl.mongodb.net/test?retryWrites=true&w=majority'

const database = 'ternium'

MongoClient.connect(url,
	{useNewUrlParser: true},
  function(error, client) {
    if (error) {
      console.log(error)
      return console.log('No se pudo conectar a la DB')
    }

    const db = client.db(database)
		//Query para encontrar todas las fallas de preparacion equipos
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Preparacion Equipos" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
			})
		//Query para contar el total de fallas de preparacion equipos
		db.collection("fallasnuevas").find({"Tipo de Falla": "Preparacion Equipos"}).count(function (err, res) {
			if (err) throw err;
			//console.log("Hay fallas de preparacion de equipos "+res);
		});

		db.collection("fallasnuevas").aggregate(
			[
				{
					$group:
					{
						_id: "$Tipo de Falla", avgValor: {$avg: "$Valor" }
      		}
				}
			]).toArray(function(err, result) {
    		console.log(result);
			});
/*
{
	"Tipo de Falla": "Fallas Electricas",
	"Variable": "Fallas Electricas",
	"Fecha Inicio": "2019/06/15 20:50:47",
	"Fecha Final": "2019/06/15 21:05:53",
	"Valor": 15.1,
	"": ""
}
*/


		//Query para encontrar todas las fallas de fallas electricas
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Fallas Electricas" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para contar el total de fallas electricas
		db.collection("fallasnuevas").find({"Tipo de Falla": "Fallas Electricas"}).count(function (err, res) {
			if (err) throw err;
			//console.log(res);
		});


		//Query para encontrar todas las fallas de fallas mecanicas
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Fallas Mecanicas" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para contar el total de fallas mecanicas
		db.collection("fallasnuevas").find({"Tipo de Falla": "Fallas Mecanicas"}).count(function (err, res) {
			if (err) throw err;
			//console.log(res);
		});

		//Query para encontrar todas las fallas de ing sistemas
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Ing Sistemas" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para contar el total de fallas ing sistemas
		db.collection("fallasnuevas").find({"Tipo de Falla": "Ing Sistemas"}).count(function (err, res) {
			if (err) throw err;
			//console.log(res);
		});


		//Query para encontrar todas las fallas de servicios centrales
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Servicios Centrales" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para contar el total de fallas de servicios centrales
		db.collection("fallasnuevas").find({"Tipo de Falla": "Servicios Centrales"}).count(function (err, res) {
			if (err) throw err;
			//console.log(res);
		});

		//Query para encontrar todas las fallas de Propias de Operación
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Propias de Operación" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para contar el total de fallas de Propias de Operación
		db.collection("fallasnuevas").find({"Tipo de Falla": "Propias de Operación"}).count(function (err, res) {
			if (err) throw err;
			//console.log(res);
		});

		//Query para encontrar todas las fallas de Servicios Operación
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Servicios Operación" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para contar el total de fallas Servicios Operación
		db.collection("fallasnuevas").find({"Tipo de Falla": "Servicios Operación"}).count(function (err, res) {
			if (err) throw err;
			//console.log(res);
		});


		db.collection("fallasnuevas").find().forEach(
		    function(doc){
		        doc['Fecha Inicio'] = new Date(doc['Fecha Inicio']); db.collection("fallasnuevas").save(doc);
		    }
		);

		db.collection("fallasnuevas").find().forEach(
		    function(doc){
		        doc['Fecha Final'] = new Date(doc['Fecha Final']); db.collection("fallasnuevas").save(doc);
		    }
		);
});
