/**
 * Created by VIshu on 12/31/2015.
 */
var http = require('http');
var fs = require('fs');

function getPage(res,file,contentType)
{
    fs.readFile(file, function (err, data)
    {
        if(err)
        {
            res.writeHead(500, {"Context-Type": "text/html"});
            res.write(err.toString());
            res.end('500: Internal Server Error!');

        }
        if(data)
        {
            res.writeHead(200, {"Context-Type": "text/html"});
            res.end(data);
        }
    });
}

function onRequest (req,res)
{
    var url = req.url;
    switch (url) {
        case '/':
            getPage(res, 'public/index.html', 'text/html');
            break;
        case '/about':
            getPage(res, 'public/about.html', 'text/html');
            break;
        case '/contact':
            getPage(res, 'public/contact.html', 'text/html');
            break;
        default:
            res.writeHead(404, {"Context-Type": "text/html"});
            res.end('404: File not found!');
    }
}

http.createServer(onRequest).listen(5000);
console.log("Server running...")

