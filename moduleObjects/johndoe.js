/**
 * Created by VIshu on 12/25/2015.
 */
var program = require('./programming.js');

var john = program();

john.favLang = ("Scala, Java");
console.log("John can program in: "+john.favLang);