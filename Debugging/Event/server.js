// respose object in server 
// how it work..
const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("This is comming from node js Server\n");
    console.log(req.url);
    if(req.url == "/first"){
     return res.end("This is first response");
    }
     return res.end("Hello from node js");
});

server.listen(8800,(req,res)=>{
    console.log("Server is lecting port 8800");
});