
var myJson;
var cardContainer = $("#card-container");
var sidebar = $("#slide-out");


$(document).ready(function() {

	console.log("SCRIPT WAS LOADED");

	document.getElementById('fileId').addEventListener('change', submitForm);


	//Inicializa el sidenav
	$('.sidenav').sidenav();

	//Obtiene de la API la informacion que va en el dashboard
	getData();



	//Inicializa el buscador de tipo de falla
	$('#search').keypress(function(e) {
              if (e.keyCode == '13') {
                 e.preventDefault();

                 var searched = this.value;
                 searchType(searched);
               }
            });
});


function getData(){
	
	/*
	var jsonToSend = {
			"userText" : text

		};*/

		$.ajax({

			url: "http://localhost:8080/all-data",
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
                
					//Aqui se ordena el json de fallas de mayor numero de eventos anomalos a menor
					orderFallas();

					var amountButtons = Math.floor(myJson.length / 10);

					if ((myJson.length%10) > 0)
						amountButtons = amountButtons + 1;

					console.log("Botones: " + amountButtons);

					//Aqui se popula el dashboard con la informacion de la API
					var newElement='';
					for (i = 0; i < myJson.length; i++) { 
			    		//cambié de span a div    	
			 			newElement += '<div class="row"><div class="col s10 m3"><div class="card"><p class="card-title" align="center" >Falla ' + myJson[i].type + '</p><div class="card-content" style="padding-top:0px;">'+ '<p class="emphasize" "align="center" >' + myJson[i].anevents + '</p><p align="center"> Eventos anómalos</p><p align="center">Cantidad de eventos: ' + myJson[i].events.length  +  '</p></div><div class="card-action"><a id="'+ myJson[i].type +'" align="center">Inspeccionar</a></div></div></div>';
			    		//newElement += '<div class="row"><div class="col s10 m3"><div class="card"><div class="card-image"><img src="../images/placeholder.png"><span class="card-title" align="center">Falla ' + myJson.data[i].type + '</span></div><div class="card-content"><p>Cantidad de eventos: ' + myJson.data[i].events.length + "\n Eventos anómalos: " + myJson.data[i].anevents + " \n Orden: " + (i+1) + '</p></div><div class="card-action"><a id="'+ myJson.data[i].type +'" href="/DetallesFalla">Inspeccionar</a></div></div></div>';

			    	}

			    	cardContainer.append(newElement);


			    	//Ponle un listener a todos los boton 'inspect' de cada card
			    	for (i = 0; i < myJson.length; i++) { 
			    		var inspectBtn = document.getElementById(myJson[i].type);
						//console.log("inspectBnt: " + inspectBtn);
						inspectBtn.addEventListener("click", function(){ goToFallaDetalles( this.getAttribute("id") )  });
					}

					//Aqui se agrega al sidebar un boton para ver todas las fallas
					var todasFallas = '<li id="todas-fallas" class="todas-fallas"><a class="waves-effect" href="#!">Todas las fallas</a></li>';
					 sidebar.append(todasFallas);
					
					//Aqui se agrega un divider al sidebar
					 sidebar.append('<li id="divider"><div class="divider"></div></li>');


					//Aqui se populan los botones que van en el sidebar para mostrar fallas por rangos
					var newElement='';
					for (i = 0; i < amountButtons; i++) { 
						var rangoSuperior = (i+1)*10;
						var rangoInferior = rangoSuperior - 9;
			    		newElement += '<li id= "' + rangoSuperior +'"><a class="waves-effect" href="#!">'
			    		newElement += rangoInferior
			    		newElement += '-'
			    		newElement += rangoSuperior
			    		newElement += ' con mas anomalías</a></li>';
					}

					sidebar.append(newElement);
			    	
			    	//Ponle un listener a todos los botones del sidebar que muestran fallas por rango
					for (i = 0; i < amountButtons; i++) { 
			    		var sidebarBtn = document.getElementById( ((i+1)*10) );
						//console.log("inspectBnt: " + inspectBtn);
						sidebarBtn.addEventListener("click", function(){ displayFallasRango( this.getAttribute("id") )  });
					}

					//Ponle un listener al boton del sidebar que muestra todas las fallas
			    	var todasFallasBtn = document.getElementById("todas-fallas");
					todasFallasBtn.addEventListener("click", function(){ displayFallasTodas( )  });

				}

			});


	}


	function goToFallaDetalles(tipoFalla){

		console.log(tipoFalla);
		setCookie("tipoFalla", tipoFalla, 1);
		var myCookie = getCookie("tipoFalla");
		console.log("Cookie guardada: " +  myCookie);
		location.href = "/DetallesFalla";

	//AQUI ABAJO VA EL CODIGO PARA PEDIRLE A LA API QUE ME MANDE A LA PAGINA DE FAILURE_DETAILS.HTML

	}

	function displayFallasRango(rangoSuperior){

		console.log(rangoSuperior);
		cardContainer.html("");
		
		var newElement='';
		for (i = rangoSuperior - 10; i < rangoSuperior && i < myJson.length; i++) { 
			//newElement += '<div class="row"><div class="col s10 m3"><div class="card"><div class="card-image"><img src="../images/placeholder.png"><span class="card-title" align="center">Falla ' + myJson.data[i].type + '</span></div><div class="card-content"><p>Cantidad de eventos: ' + myJson.data[i].events.length + "\n Eventos anormales: " + myJson.data[i].anevents + " \n Orden: " + (i+1) + '</p></div><div class="card-action"><a id="'+ myJson.data[i].type +'" href="/DetallesFalla">Inspeccionar</a></div></div></div>';
		    newElement += '<div class="row"><div class="col s10 m3"><div class="card"><p class="card-title" align="center" >Falla ' + myJson[i].type + '</p><div class="card-content" style="padding-top:0px;">'+ '<p class="emphasize" "align="center" >' + myJson[i].anevents + '</p><p align="center"> Eventos anómalos</p><p align="center">Cantidad de eventos: ' + myJson[i].events.length  +  '</p></div><div class="card-action"><a id="'+ myJson[i].type +'" align="center" >Inspeccionar</a></div></div></div>';

		}

		//Ponle un listener a todos los boton 'inspect' de cada card
		cardContainer.append(newElement);

		for (i = rangoSuperior - 10; i < rangoSuperior && i < myJson.length ; i++) { 
	  		var inspectBtn = document.getElementById(myJson[i].type);
			//console.log("inspectBnt: " + inspectBtn);
			inspectBtn.addEventListener("click", function(){ goToFallaDetalles( this.getAttribute("id") )  });
		}





	}

	function displayFallasTodas(){

		cardContainer.html("");

		var newElement='';
		for (i = 0; i < myJson.length; i++) { 
    		//cambié de span a div 
    		//newElement += '<div class="row"><div class="col s10 m3"><div class="card"><div class="card-image"><img src="../images/placeholder.png"><span class="card-title" align="center">Falla ' + myJson.data[i].type + '</span></div><div class="card-content"><p>Cantidad de eventos: ' + myJson.data[i].events.length + "\n Eventos anormales: " + myJson.data[i].anevents + " \n Orden: " + (i+1) + '</p></div><div class="card-action"><a id="'+ myJson.data[i].type +'" href="/DetallesFalla">Inspeccionar</a></div></div></div>';
	   	    newElement += '<div class="row"><div class="col s10 m3"><div class="card"><p class="card-title" align="center" >Falla ' + myJson[i].type + '</p><div class="card-content" style="padding-top:0px;">'+ '<p class="emphasize" "align="center" >' + myJson[i].anevents + '</p><p align="center"> Eventos anómalos</p><p align="center">Cantidad de eventos: ' + myJson[i].events.length  +  '</p></div><div class="card-action"><a id="'+ myJson[i].type +'" align="center" >Inspeccionar</a></div></div></div>';
	   	}

	   	cardContainer.append(newElement);

		//Ponle un listener a todos los boton 'inspect' de cada card
	   	for (i = 0; i < myJson.length; i++) { 
	  		var inspectBtn = document.getElementById(myJson[i].type);
			//console.log("inspectBnt: " + inspectBtn);
			inspectBtn.addEventListener("click", function(){ goToFallaDetalles( this.getAttribute("id") )  });
		}


	}

	function displayUnaFalla(tipo){
		
		cardContainer.html("");

		var newElement='';
		for (i = 0; i < myJson.length; i++) { 
    		//cambié de span a div 
    		if (myJson[i].type == tipo)
    			//newElement += '<div class="row"><div class="col s10 m3"><div class="card"><div class="card-image"><img src="../images/placeholder.png"><span class="card-title" align="center">Falla ' + myJson.data[i].type + '</span></div><div class="card-content"><p>Cantidad de eventos: ' + myJson.data[i].events.length + "\n Eventos anormales: " + myJson.data[i].anevents + " \n Orden: " + (i+1) + '</p></div><div class="card-action"><a id="'+ myJson.data[i].type +'" href="/DetallesFalla">Inspeccionar</a></div></div></div>';
	   			newElement += '<div class="row"><div class="col s10 m3"><div class="card"><p class="card-title" align="center" >Falla ' + myJson[i].type + '</p><div class="card-content" style="padding-top:0px;">'+ '<p class="emphasize" "align="center" >' + myJson[i].anevents + '</p><p align="center"> Eventos anómalos</p><p align="center">Cantidad de eventos: ' + myJson[i].events.length  +  '</p></div><div class="card-action"><a id="'+ myJson[i].type +'" align="center" >Inspeccionar</a></div></div></div>';
	   	}


	   	cardContainer.append(newElement);

	  	
	  	var inspectBtn = document.getElementById(tipo);
		inspectBtn.addEventListener("click", function(){ goToFallaDetalles( this.getAttribute("id") )  });
		


	}


	function orderFallas(){

		for (i = 0; i < myJson.length; i++) { 
			for (j = i+1; j < myJson.length; j++) { 
				if (myJson[i].anevents < myJson[j].anevents){

					var temp = myJson[i];
					myJson[i] = myJson[j];
					myJson[j] = temp;

				}
		   	}
	   	}

	}



	function searchType(searched){

		if (searched == ""){
			displayFallasTodas();
		} else{
			displayUnaFalla(searched);
		}
	}



   function openDialog() {
          //document.getElementById('fileId').addEventListener('change', submitForm);
          document.getElementById('fileId').click();
   }

  function submitForm() {

          //document.getElementById('submitId').click();
          
          $('#loading').html("CARGANDO...");
          cardContainer.html("");
          //setTimeout(sendFile, 3000);
          sendFile();

  }

  function sendFile(){

	var data = new FormData();
	$.each(jQuery('#fileId')[jQuery('#fileId').length-1].files, function(i, file) {
	    data.append('file-'+i, file);
	});

	//alert(data);


	$.ajax({
	    url: 'http://localhost:8080/upload',
	    data: data,
	    cache: false,
	    contentType: false,
	    processData: false,
	    method: 'POST',
	    type: 'POST', // For jQuery < 1.9
	    success: function(data){
	        //alert(data);
	        $('#loading').html("");
	        getData();
	    }
	});

  }



