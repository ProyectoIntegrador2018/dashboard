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
			console.log(result);
		//Query para
		db.collection("fallasnuevas").find({"Tipo de Falla": "Preparacion Equipos"}).count(function (err, res) {
			if (err) throw err;
			//console.log(res);
		});

		})
		//Query para encontrar todas las fallas de fallas electricas
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Fallas Electricas" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para encontrar todas las fallas de fallas mecanicas
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Fallas Mecanicas" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para encontrar todas las fallas de ing sistemas
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Ing Sistemas" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para encontrar todas las fallas de servicios centrales
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Servicios Centrales" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para encontrar todas las fallas de Propias de Operación
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Propias de Operación" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})
		//Query para encontrar todas las fallas de Servicios Operación
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Servicios Operación" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
		})


		db.collection("fallasnuevas").find({"Tipo de Falla": "Preparacion Equipos"}).count(function (err, res) {
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
