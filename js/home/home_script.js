
var myJson;
var cardContainer = $("#card-container");
var sidebar = $("#slide-out");


$(document).ready(function() {

	console.log("SCRIPT WAS LOADED");

	//Inicializa el sidenav
	$('.sidenav').sidenav();

	//Obtiene de la API la informacion que va en el dashboard
	getData();




});


function getData(){
	
	/*
	var jsonToSend = {
			"userText" : text

		};*/

		$.ajax({

			url: "https://jsonplaceholder.typicode.com/todos?_limit=11",
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
					myJson = JSON.parse('{"data":[{ "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }, { "type": "mecanico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":5}, { "type": "electrico" , "events": [ {"date": "2019-01-01", "duration": 10.2, "limits": { "min": 2, "max": 10 }, "anormal": true}, {"date": "2019-01-02", "duration": 8.1, "limits": { "min": 2, "max": 10 }, "anormal": false},{"date": "2019-01-03", "duration": 11.2, "limits": { "min": 2, "max": 10 }, "anormal": true}], "nevents":3, "anevents":2 }]}');
					//console.log(myJson.data[1].type);

					var amountButtons = Math.floor(myJson.data.length / 10);

					if ((myJson.data.length%10) > 0)
						amountButtons = amountButtons + 1;

					console.log("Botones: " + amountButtons);

					//Aqui se popula el dashboard con la informacion de la API
					var newElement='';
					for (i = 0; i < myJson.data.length; i++) { 
			    		//cambié de span a div 
			    		newElement += '<div class="row"><div class="col s10 m2"><div class="card"><div class="card-image"><img src="../images/placeholder.png"><span class="card-title" align="center">Falla ' + myJson.data[i].type + '</span></div><div class="card-content"><p>Cantidad de eventos: ' + myJson.data[i].events.length + "\n Eventos anormales: " + myJson.data[i].anevents + " \n Orden: " + (i+1) + '</p></div><div class="card-action"><a id="'+ myJson.data[i].type +'" href="/DetallesFalla">Inspeccionar</a></div></div></div>';
			    	}

			    	cardContainer.append(newElement);

			    	//Ponle un listener a todos los boton 'inspect' de cada card
			    	for (i = 0; i < myJson.data.length; i++) { 
			    		var inspectBtn = document.getElementById(myJson.data[i].type);
						//console.log("inspectBnt: " + inspectBtn);
						inspectBtn.addEventListener("click", function(){ goToFallaDetalles( this.getAttribute("id") )  });
					}

					//Aqui se populan los botones que van en el sidebar
					var newElement='';
					for (i = 0; i < amountButtons; i++) { 
						var rangoSuperior = (i+1)*10;
						var rangoInferior = rangoSuperior - 9;
			    		newElement += '<li id= "' + rangoSuperior +'"><a class="waves-effect" href="#!">'
			    		newElement += rangoInferior
			    		newElement += '-'
			    		newElement += rangoSuperior
			    		newElement += ' con mas anomalias</a></li>';
					}

					sidebar.append(newElement);
			    	
			    	//Ponle un listener a todos los botones del sidebar
					for (i = 0; i < amountButtons; i++) { 
			    		var sidebarBtn = document.getElementById( ((i+1)*10) );
						//console.log("inspectBnt: " + inspectBtn);
						sidebarBtn.addEventListener("click", function(){ displayFallas( this.getAttribute("id") )  });
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

	function displayFallas(rangoSuperior){

		console.log(rangoSuperior);
		cardContainer.html("");
		
		var newElement='';
		for (i = rangoSuperior - 10; i < rangoSuperior && i < myJson.data.length; i++) { 
			newElement += '<div class="row"><div class="col s10 m2"><div class="card"><div class="card-image"><img src="../images/placeholder.png"><span class="card-title" align="center">Falla ' + myJson.data[i].type + '</span></div><div class="card-content"><p>Cantidad de eventos: ' + myJson.data[i].events.length + "\n Eventos anormales: " + myJson.data[i].anevents + " \n Orden: " + (i+1) + '</p></div><div class="card-action"><a id="'+ myJson.data[i].type +'" href="/DetallesFalla">Inspeccionar</a></div></div></div>';
		}

		cardContainer.append(newElement);



	}



