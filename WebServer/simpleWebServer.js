/**
 * Created by VIshu on 12/25/2015.
 */
//code for http webserver
var http = require('http');

function onRequest(request, response)
{
    console.log('User made a request '+request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Here is your index file");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log('Server up and running!');