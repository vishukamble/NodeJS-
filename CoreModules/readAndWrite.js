/**
 * Created by VIshu on 12/25/2015.
 */
var file = require("fs");

file.writeFileSync("test.txt","This is me trying to write inside test.txt");
console.log("Reading test.txt file\n" );
console.log(file.readFileSync("test.txt").toString());