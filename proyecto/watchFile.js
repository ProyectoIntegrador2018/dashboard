/*const fs = require('fs');
require('log-timestamp');

const testRead = './testRead.txt';
var contador = 1;

console.log(`Watching for file changes on ${testRead}`);

fs.watchFile(testRead, { interval: 1000 }, (curr, prev) => {
  //fs.appendFile('testOutput.txt', contador.toString()+'\n', function (err) {
    //if (err) throw err;
    //console.log('Updated!');
    //contador++;
    const { exec } = require("child_process");

	exec("cp testRead.txt testOutput.txt", (error, stdout, stderr) => {
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
*/
