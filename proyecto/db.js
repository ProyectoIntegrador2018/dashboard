
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const mongoose = require('mongoose');
var Schema = mongoose.Schema
const ObjectID = mongodb.ObjectID

const url = 'mongodb+srv://admin:Admin_DB_Cluster123*@dashboard-94zip.mongodb.net/test?retryWrites=true&w=majority'

const database = 'Dashboard'

MongoClient.connect(url,
	{useNewUrlParser: true},

  function(error, client) {
    if (error) {
      console.log(error)
      return console.log('No se pudo conectar a la DB')
    }

	var sInicio = '15/06/2018 08:50:47 p.m.'
     var diaI = sInicio[0]+sInicio[1]
     var mesI = sInicio[3]+sInicio[4]
     var añoI = sInicio[6]+sInicio[7]+sInicio[8]+sInicio[9]
     var horaI = sInicio[11]+sInicio[12]
     var minutoI = sInicio[14]+sInicio[15]
     var segundoI = sInicio[17]+sInicio[18]

    const db = client.db(database)
    db.collection('Fallas').insertOne({
       tipo: 'Falla eléctrica',
       diaInicio: diaI,
       mesInicio: mesI,
       anoInicio: añoI,
       horaInicio: horaI,
       minutoInicio: minutoI,
       segundoInicio: segundoI,
       hora_fin: '15/06/2018 09:05:53 p.m.',
       valor: 15.1
     }, function(error, result) {
       if(error) {
         console.log(error)
       }
       console.log(result.ops)
     })

     db.collection('Fallas').findOne({
       valor: 15.1
     }, function(error, user) {
       if(error) {
         console.log(error)
       }
       console.log(user)
     })


	});
