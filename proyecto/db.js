const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const mongoose = require('mongoose');
var Schema = mongoose.Schema
const ObjectID = mongodb.ObjectID

const url = 'mongodb+srv://admin:Admin_DB_Cluster123*@cluster0-k2ozl.mongodb.net/test?retryWrites=true&w=majority'

const database = 'ternium'
var resultadoAfuera = "abc"

MongoClient.connect(url,
	{useNewUrlParser: true},
  function(error, client) {
    if (error) {
      console.log(error)
      return console.log('No se pudo conectar a la DB')
    }

    const db = client.db(database)
		//Query para encontrar todas las fallas de preparacion equipos
		db.colmlection("fallasnuevas").find({ "Tipo de Falla": "Preparacion Equipos" }).toArray(function(err, result) {
		db.collection("fallasnuevas").find({ "Tipo de Falla": "Preparacion Equipos" }).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
			})
		//Query para contar el total de fallas de preparacion equipos
		db.collection("fallasnuevas").find({"Tipo de Falla": "Preparacion Equipos"}).count(function (err, res) {
			if (err) throw err;
			console.log("Hay fallas de preparacion de equipos "+res);
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
    		//console.log(result);
			});


		db.collection("fallasnuevas").aggregate(
			[
				{
					$group:
					{
						_id :{fallas:"$Tipo de Falla", month: { $month: "$Fecha Inicio" },year:{$year:"$Fecha Inicio"}} , count: { $sum: 1 }
      		}
				}
			]).sort({"_id.year": 1,"_id.month": 1}).toArray(function(err, result) {
    		console.log(result);
			});
		//Query para
		db.collection("fallasnuevas").find({"Tipo de Falla": "Preparacion Equipos"}).count(function (err, res) {
			if (err) throw err;
			//console.log(res);
		});

		var myPromise = () => {
         return new Promise((resolve, reject) => {
								//Query para encontrar todas las fallas de preparacion equipos
								db.collection("fallasnuevas").find({ "Tipo de Falla": "Preparacion Equipos" }).toArray(function(err, resultado) {
									err
										? reject(err)
										: resolve(resultado)
									//console.log(result);
								//Query para
								db.collection("fallasnuevas").find({"Tipo de Falla": "Preparacion Equipos"}).count(function (err, res) {
									err
										? reject(err)
										: resolve(resultado)
									//console.log(res);
								});

							})
						});
					};

					//Step 2: async promise handler
		       var callMyPromise = async () => {

		          var result = await (myPromise());
		          //console.log(result)
		          return result;
		       };

					 callMyPromise().then(function(result) {
          //client.close();
          resultadoAfuera = JSON.stringify(result)
					console.log(resultadoAfuera)
       });

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
