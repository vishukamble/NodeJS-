/**
 * Created by VIshu on 12/25/2015.
 */
var connect = require('connect');
var http = require('http');

var app = connect();

function engg(request, response, next)
{
    console.log("This is engineering branch");
    next();
}

function med(request, response, next)
{
    console.log("This is medical branch");
    next();
}

app.use("/engineering", engg);
app.use("/medical", med);

http.createServer(app).listen(8888);
console.log("Server is running....");