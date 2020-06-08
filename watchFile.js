const fs = require('fs');
require('log-timestamp');

const testRead = './testRead.txt';
var contador = 1;

console.log(`Watching for file changes on ${testRead}`);

//Al momento de correr el watchFile.js se buscan cambios en el archivo objetivo (testWatchFileRead.txt)
fs.watchFile(testRead, { interval: 1000 }, (curr, prev) => {
  //fs.appendFile('testOutput.txt', contador.toString()+'\n', function (err) {
    //if (err) throw err;
    //console.log('Updated!');
    //contador++;
    const { exec } = require("child_process");

//Se ejecuta el comando de bash de copiar la información de un archivo a otro, todo esto corriendo en el background gracias a pm2
	exec("cp testWatchFileRead.txt testWatchFileOutput.txt", (error, stdout, stderr) => {
	    if (error) {
		console.log(`error: ${error.message}`);
		return;
	    }
	    if (stderr) {
		console.log(`stderr: ${stderr}`);
		return;
	    }
	    console.log('Updated! See testOutput for changes!');
	});
  });
