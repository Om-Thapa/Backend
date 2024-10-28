const http = require('http');
const fs = require('fs');
const path = require('path');

//Use any local port like 8080, 6000, 8000 or 3000
//Eg port 80 and 443 are already used by computer
const port = 3001;

//Creating a server
//http module help to listen to request and act as a server
const server=http.createServer((req,res)=>{
    //req is something that is recieved and res is something that we are sending
    //Our plan is to check if url end with '/' then server me index.html. But before that we have to find the path of the desired file.
    //Now finding the path
    const filePath = path.join(__dirname, req.url==='/'?"index.html":req.url);

    //Finding the extension name of the desires file
    const extName = String(path.extname(filePath)).toLowerCase();

    //Defining the type of file that I want to support(This is optional)
    const mimeTypes={
        '.html':'text/html',
        '.css':'text/css',     
        '.js':'text/javascript',     
        '.png':'text/png',     
    }

    //Defining object content type
    const contentType = mimeTypes[extName] || 'application/octet-stream';
    //Till this point we have grabbed everything we require
    //We start serving it
    //Now it job of fs to read the file and serve it

    fs.readFile(filePath,(err,content)=>{
        if(err.code==="ENOENT"){
            res.writeHead(404,{"Content-type":"text/html"});
            res.end("404: File not Found MotherFucker");
        }else{
            //First sending the head part of the response
            res.writeHead(200,{'Content-Type':contentType});//Giving Content-Type helps user to evaluate the type of data that he recieves
            //Now sending the body part
            res.end(content,'utf-8')//Here utf-8 specifies the type of content we are sending(can also use utf-16)
        }
    })
});

server.listen(port,()=>{
    console.log("Server listening on port "+port);
})