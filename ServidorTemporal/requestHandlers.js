//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Proposito de este modulo: contener todas las funciones necesarias para despachar cualquier recurso (html,css,js,pdf,etc) o servicio (IBM PI, login, logout,etc) solicitado por un cliente
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fs = require("fs"); //modulo para accesar, crear, modificar, borrar archivos de extension .txt entre otros
var mysql = require("mysql"); //modulo para establecer una conexion con la base de datos de un servidor MySQL
var querystring = require("querystring"); //modulo para parsear en un objeto con sus atributos (ej. nombredelobjeto.atributo) a la informacion enviada por el usuario via metodo POST
var async = require("async"); //modulo para utilizar funciones asincronas (ej. each,foreach, y otros loops de manera asincrona)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion que entrega al cliente la view de la homepage de la app web
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function homePage(response, postData, cookieJar) {
  console.log("Request handler 'homePage' was called.");
  fs.readFile("../html/home.html", null, function(error, data) {
    if (error) {
      response.writeHead(302, { Location: "./public/error.html" });
      //response.write('File not found!');
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
    }

    response.end();
  });
}

function failureDetailsPage(response, postData, cookieJar) {
  console.log("Request handler 'homePage' was called.");
  fs.readFile("../html/failure_details.html", null, function(error, data) {
    if (error) {
      response.writeHead(302, { Location: "./public/error.html" });
      //response.write('File not found!');
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
    }

    response.end();
  });
}


function cssContent(response, postData, pathname) {
  //  var fullpath = './public' + pathname;
  console.log(
    "Request handler 'cssContent' was called. The file " +
      pathname +
      " was requested."
  );

  var fullpath = ".." + pathname;

  fs.readFile(fullpath, null, function(error, data) {
    if (error) {
      console.log("No file found at:" + fullpath);
      response.writeHead(404);
      response.write("File not found!");
    } else {
      response.writeHead(200, { "Content-Type": "text/css" });
      response.write(data);
    }

    response.end();
  });
}



function jsContent(response, postData, pathname) {
  console.log(
    "Request handler 'jsContent' was called. The file " +
      pathname +
      " was requested."
  );

  //var fullpath = './public' + pathname;
  var fullpath = ".." + pathname;

  fs.readFile(fullpath, null, function(error, data) {
    if (error) {
      console.log("No file found at:" + fullpath);
      response.writeHead(404);
      response.write("File not found!");
    } else {
      response.writeHead(200, { "Content-Type": "text/javascript" });
      response.write(data);
    }

    response.end();
  });
}

function pngContent(response, postData, pathname) {
  console.log(
    "Request handler 'pngContent' was called. The file " +
      pathname +
      " was requested."
  );

  //var fullpath = './public' + pathname;
  var fullpath = ".." + pathname;

  fs.readFile(fullpath, null, function(error, data) {
    if (error) {
      console.log("No file found at:" + fullpath);
      response.writeHead(404);
      response.write("File not found!");
    } else {
      response.writeHead(200, { "Content-Type": "image/png" });
      response.write(data);
    }

    response.end();
  });
}

function jpgContent(response, postData, pathname) {
  console.log(
    "Request handler 'jpgContent' was called. The file " +
      pathname +
      " was requested."
  );

  //var fullpath = './public' + pathname;
  var fullpath = ".." + pathname;

  fs.readFile(fullpath, null, function(error, data) {
    if (error) {
      console.log("No file found at:" + fullpath);
      response.writeHead(404);
      response.write("File not found!");
    } else {
      response.writeHead(200, { "Content-Type": "image/jpg" });
      response.write(data);
    }

    response.end();
  });
}

//Views de la app web
exports.homePage = homePage;
exports.failureDetailsPage = failureDetailsPage;


//Acciones o servicios que el cliente solicita automaticamente
exports.cssContent = cssContent;
exports.jsContent = jsContent;
exports.pngContent = pngContent;
exports.jpgContent = jpgContent;



