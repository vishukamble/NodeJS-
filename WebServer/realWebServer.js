/**
 * Created by VIshu on 12/25/2015.
 */
var http = require('http');
var file = require('fs');

//code for 404
function send404Response(response)
{
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("Error 404 Sorry file not found!");
    response.end();
}

function onRequest(request, response)
{
    if(request.method=='GET' && request.url=='/')
    {
        response.writeHead(200, {"Context-Type": "text/html"});
        file.createReadStream("./index.html").pipe(response);
    }
    else
    {
        send404Response(response);
    }

}

http.createServer(onRequest).listen(8888);
console.log('Server up and running!');