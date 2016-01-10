var fs = require('fs');
var dir = process.argv[2];
var reg = new RegExp('\\.' + process.argv[3] + '$')

fs.readdir(dir, function (err, files) 
    {
    if(err)
    {
        console.log("Error");
    }
    else
    {
        files.forEach(function (file) 
        {
        if (reg.test(file))
            console.log(file);
        });
    }
  });
/*
     var fs = require('fs')  
     var path = require('path')  
       
     fs.readdir(process.argv[2], function (err, list) {  
       list.forEach(function (file) {  
         if (path.extname(file) === '.' + process.argv[3])  
           console.log(file)  
       })  
     })  */