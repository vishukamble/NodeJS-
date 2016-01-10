var fs = require("fs"); //required module
var file = fs.readFileSync(process.argv[2]); //store file in variable
var lines = file.toString().split('\n').length - 1 //split at new line to count new lines

console.log(lines);