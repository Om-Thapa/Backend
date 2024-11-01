const http=require('http');

// const server=http.createServer((req,res)=>{
//     res.end();
// })

//Using Event Emitter API
const server=http.createServer();
//emits request event
//subscribe to it / listens for it / respond to it
server.on('request',(req,res)=>{
    res.end('Welcome');
})

server.listen(5000,()=>{
    console.log("listening to port 5000");
})