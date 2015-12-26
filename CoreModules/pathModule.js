/**
 * Created by VIshu on 12/25/2015.
 */
var path = require('path'); //import core modules.

var home = "/var/www//html//geekstarts/index.html";
var about = "/var/www//html/geekstarts/about.html";
var team = "/var/www//html/geekstarts/team.html";

console.log(path.normalize(home)); //normalizes the variable to remove typos
console.log(path.dirname(about)); //gives the documentary root
console.log(path.basename(team)); //gives the name of html file
console.log(path.extname(home)); //displays the extension

