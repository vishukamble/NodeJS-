var fs = require("fs");
var file = process.argv[2];
var lines;
fs.readFile(file,function(err,file)
{
    if(err)
        console.log("Error occured");
    else
        {
            lines = file.toString().split('\n').length - 1;
            console.log(lines);
        }
});

