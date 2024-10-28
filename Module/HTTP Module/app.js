const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
        res.end('Welcome to our Homepage');
    if(req.url==='/about')
        res.end('Here is our short history');
    res.end(`
            <h1>Opps!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href='/'>Back Home</a>
    `);
})

server.listen(5000,()=>{
    console.log("Server is listening to port "+5000);
});