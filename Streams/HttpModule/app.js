const http =require('http');
const fs=require('fs');

const server=http.createServer(function(req,res){
    // const text =fs.readFileSync('./bigFile.txt','utf8');
    // res.end(text);
    const fileStream =fs.createReadStream('./bigFile.txt','utf8');
    fileStream.on('open',()=>{
        //Instead of res.end() use fileStream has pipe() method
        //pipe() pushes from readStream() to writeStream()
        fileStream.pipe(res);
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
})
server.listen(5000,()=>{
    console.log("listening to port 5000....")
})