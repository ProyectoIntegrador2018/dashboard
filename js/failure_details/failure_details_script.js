$(document).ready(function() {

	console.log("SCRIPT WAS LOADED");

	//Inicializa el sidenav
	$('.sidenav').sidenav();

	//Obten de la cookie el tipo de falla del cual le pediras mas informacion a la API
	var tipoFalla = getCookie("tipoFalla");


	console.log("cookie: " + tipoFalla);
	var fallaText = document.getElementById("tipo");

	fallaText.innerHTML = tipoFalla;


});