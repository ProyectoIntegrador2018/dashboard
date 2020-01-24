$(document).ready(function() {

	console.log("SCRIPT WAS LOADED");

	//Inicializa el sidenav
	$('.sidenav').sidenav();

	//Obtiene de la API la informacion que va en el dashboard
	getData();




});


function getData(){

	var cardContainer = $("#card-container");
	
	/*
	var jsonToSend = {
			"userText" : text
		};*/

		$.ajax({

			url: "https://jsonplaceholder.typicode.com/todos?_limit=0",
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

					//json estatico para simular el json recibido por la api
					var myJson = JSON.parse('{"data":[{ "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}]}');
					//console.log(myJson.data[1].type);

					//Aqui se popula el dashboard con la informacion de la API
					var newElement='';
					for (i = 0; i < myJson.data.length; i++) { 
			    		//cambié de span a div 
			    		newElement += '<div class="row"><div class="col s12 m3"><div class="card"><div class="card-image"><img src="../images/placeholder.png"><span class="card-title" align="center">Falla ' + myJson.data[i].type + '</span></div><div class="card-content"><p>Cantidad de eventos: ' + myJson.data[i].events.length + "\n Eventos anormales: " + myJson.data[i].anevents + '</p></div><div class="card-action"><a id="'+ myJson.data[i].type +'" href="/DetallesFalla">Inspeccionar</a></div></div></div>';
			    	}

			    	cardContainer.append(newElement);

			    	for (i = 0; i < myJson.data.length; i++) { 
			    		var inspectBtn = document.getElementById(myJson.data[i].type);
						//console.log("inspectBnt: " + inspectBtn);
						inspectBtn.addEventListener("click", function(){ goToFallaDetalles( this.getAttribute("id") )  });
					}


				}

			});


	}


	function goToFallaDetalles(tipoFalla){

		console.log(tipoFalla);
		setCookie("tipoFalla", tipoFalla, 1);
		var myCookie = getCookie("tipoFalla");
		console.log("Cookie guardada: " +  myCookie);

	//AQUI ABAJO VA EL CODIGO PARA PEDIRLE A LA API QUE ME MANDE A LA PAGINA DE FAILURE_DETAILS.HTML

}

