
var myJson;
var cardContainer = $("#card-container");

var minDate=0;
var maxDate=0;


    //Crea el json que se usará en la grafica
    var jsDataNormal= JSON.parse(  '[{ "x": 0, "y": 0 }]');
    var jsDataAnormal= JSON.parse( '[{ "x": 0, "y": 0 }]');




    $(document).ready(function() {

		console.log("SCRIPT WAS LOADED");
		var tipoFalla = getCookie("tipoFalla");
		console.log("cookie: " + tipoFalla);
		getData(tipoFalla);

});



    function getData(tipoFalla){

    	var endpoint = "http://localhost:8080/get-data/" + tipoFalla;
    	console.log("ENDPOINT:" + endpoint);

    	$.ajax({


    		url: endpoint ,
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

    			myJson = dataReceived;

    			for (var i = 0; i < myJson.length; i++) {
    				if(myJson[i].type==tipoFalla){
    					myJson=myJson[i];
    					break;
    				}
    			}

	         	//cant fallas
	         	totalFallas=myJson.events.length;

	         	//cant anomalias
	         	var totalAnomalias=0;

	          	//anomalia con menor duracion
	          	var leastDur=100000;

	          	//Promedio
	          	var promDur=0;

				//anomalia con mayor duracion
				var MaxDur=0;
				minDate=myJson.events[0].date;
				maxDate=myJson.events[myJson.events.length-1].date;
				//En este for hago un json nuevo para poder usarlo para graficar en el chartJS
				for (var i = 0; i < myJson.events.length ; i++) {
					promDur+=myJson.events[i].duration;

					if(myJson.events[i].duration<leastDur){
						leastDur=myJson.events[i].duration;
					}
					if(myJson.events[i].duration>MaxDur){
						MaxDur=myJson.events[i].duration;
					}

					if (myJson.events[i].anormal) {
						dataAdd = {
							"x": myJson.events[i].date,
							"y": myJson.events[i].duration
						}
						jsDataAnormal.push(dataAdd)
						totalAnomalias+=1;
					} else{
						dataAdd = {
							"x": myJson.events[i].date,
							"y": myJson.events[i].duration
						}
						jsDataNormal.push(dataAdd);

					} 
				}
				promDur=promDur/totalFallas;
				//porcentaje anomalo
				porcFallas=(totalAnomalias/totalFallas)*100;

				chartSetUp();

				document.getElementById('fallaCookie').innerHTML = 'Falla ' +tipoFalla;
				document.getElementById('totalFallas').innerHTML = 'Total fallas: ' +totalFallas;
				document.getElementById('totalAnomalias').innerHTML = 'Total anomalías: '+totalAnomalias;
				document.getElementById('promDur').innerHTML = 'Duración promedio: '+promDur.toFixed(3);
				document.getElementById('MaxDur').innerHTML = 'Duración máxima: '+MaxDur;
				document.getElementById('leastDur').innerHTML = 'Duración mínima: '+leastDur;
				document.getElementById('porcFallas').innerHTML = 'Porcentaje de anomalías: '+porcFallas.toFixed(3)+'%';

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

	         datasets: [{
	         	label: 'Fallas normales',
	          data: jsDataNormal,
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
	    		xAxes: [{
	    			type: 'time',
	    			time: {
	    				parser: 'YYYY-MM-DD',
	    				unit: 'day',
	    				displayFormats: {
	    					day: 'YYYY-MM-DD'
	    				},
	    				min: minDate,
	    				max: maxDate
	    			},
	    			ticks: {
	    				//source: 'data'
	    			}
	    		}],
	    		yAxes: [{
	    			ticks: {
	    				beginAtZero: true
	    			}
	    		}]
	    	}
	    }
	});
}



