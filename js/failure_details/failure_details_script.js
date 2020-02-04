
var myJson;
var cardContainer = $("#card-container");
var sidebar = $("#slide-out");



//Crea el json que se usará en la grafica
var jsDataNormal= JSON.parse(  '[{ "x": 0, "y": 0 }]');
var jsDataAnormal= JSON.parse( '[{ "x": 0, "y": 0 }]');




$(document).ready(function() {

  console.log("SCRIPT WAS LOADED");

  //Inicializa el sidenav
  $('.sidenav').sidenav();

  //Obten de la cookie el tipo de falla del cual le pediras mas informacion a la API
  var tipoFalla = getCookie("tipoFalla");

  console.log("cookie: " + tipoFalla);


  //Obtiene de la API la informacion que va en el dashboard
  getData(tipoFalla);

//  var fallaText = document.getElementById("tipo");

//  fallaText.innerHTML = tipoFalla;

});



function getData(tipoFalla){

  var endpoint = "http://sal.muchogas.com:8080/get-data/" + tipoFalla;
  console.log("ENDPOINT:" + endpoint);

    $.ajax({


      url: "http://sal.muchogas.com:8080/get-data/electrico" ,
      cache : false,
      type : "GET",
      crossDomain: true,
      dataType : "json",

      error : function(errorMessage, textStatus, errorThrown) {
        console.log(errorMessage);
        console.log(textStatus);
        console.log(errorThrown);
      },

      success: function(dataReceived){

        console.log("Data that was received from the server: " + dataReceived);

                    myJson = JSON.parse('{"data": [{ "type": "electrico" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, {    "type": "mecanico" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5},{    "type": "a" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":1},  {   "type": "b" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, {     "type": "c" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, {    "type": "d" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":1 }, {     "type": "e" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, {     "type": "f" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5},{     "type": "g" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":1},  {   "type": "h" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, {     "type": "i" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, {    "type": "j" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":1 },{     "type": "k" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, {    "type": "l" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5},{     "type": "m" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":1},  {   "type": "n" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, {     "type": "o" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, {    "type": "p" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":1 }, {     "type": "q" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, {     "type": "r" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5},{     "type": "s" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":1},  {   "type": "t" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, {     "type": "u" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, {    "type": "v" , "events":[ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":1 }]}');
                  myJson=myJson.data[0];

                  //cant fallas
          totalFallas=myJson.events.length;
                  
                  //cant anomalias
                  var totalAnomalias=0;
                  

                  //anomalia con menor duracion
                  var leastDur=0;

                  //anomalia con mayor duracion
                  var MaxDur=100000;
                  //En este for hago un json nuevo para poder usarlo para graficar en el chartJS
                  for (var i = 0; i < myJson.events.length ; i++) {
                    if (myJson.events[i].anormal) {
                      dataAdd = {
                        "x": myJson.events[i].date,
                        "y": myJson.events[i].duration
                      }
                      jsDataAnormal.push(dataAdd)
                      totalAnomalias+=1;
              if(myJson.events[i].duration<leastDur){
                leastDur=myJson.events[i].duration;
              }
              if(myJson.events[i].duration>MaxDur){
                MaxDur=myJson.events[i].duration;
              }
                    } else{
                      dataAdd = {
                        "x": myJson.events[i].date,
                        "y": myJson.events[i].duration
                      }
                      jsDataNormal.push(dataAdd);
                      
                    } 
                  }

                  //porcentaje anomalo
                  porcFallas=(totalAnomalias/totalFallas)*100;
          
          chartSetUp();


        }

      });


}

function chartSetUp(){

                    var siz=8; //Tamaño punto
                    var hover=13; //Pasas el mouse y el tamaño incrementa
                    var ctx = document.getElementById('myChart');
                    var myChart = new Chart(ctx, {
                      type: 'line',
                      data: {
                                 // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                 //labels: ['22/10/2020','22/10/2020','22/10/2020','22/10/2020','22/10/2020','22/10/2020','22/10/2020','22/10/2020','22/10/2020'],
                             
                                 datasets: [{
                                  label: 'Fallas normales',
                                  data: jsDataNormal,   //[6, 7, 3, 5, 4, 3,5,3,5,6,8,6,4,4],
                                    backgroundColor:  //relleno del circutli
                                      'rgba(0,0, 255, 1)'
                                    ,
                                    borderColor: [ //color de linea
                                      'rgba(0, 0, 0, 1)'
                                    ],
                                    fill:false,
                                    pointRadius: siz,
                                    pointHoverRadius:hover,
                                    borderWidth: 1,
                                    showLine: false
                                }, {

                                  label: 'Fallas anómalas',
                                  data: jsDataAnormal, //[9,8,2,2,1,8,2,1,9,9,8,1,2,8,9,8,1],
                                    backgroundColor:  //relleno del circutli
                                    'rgba(255,0, 0, 1)'
                                    ,
                                    borderColor: [ //color de linea
                                    'rgba(0, 0, 0, 1)'
                                    ],
                                    fill:false,
                                    pointRadius: siz,
                                    pointHoverRadius:hover,
                                    //borderWidth: 1,
                                    showLine: false,

                                }]
                              },
                              options: {
                                legend : {
                                  display:false
                                },
                                scales: {
                                  yAxes: [{
                                    ticks: {
                                      beginAtZero: true
                                    }
                                  }]
                                }
                              }
                          });

}






