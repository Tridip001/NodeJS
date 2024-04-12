// this is a Basic Sever code to check how Package.json file is work.

// Create a server using Node JS.

//1. Import http Library module 
const http = require('http');

//2. Create Server.
const server = http.createServer((req,res)=>{

    //Here comes the request.
    res.end("<h1> This is new coding Server.<\h1>");
});

//add Port number to listen  on.
server.listen(8080,()=>{
    console.log("Server Running at http://localhost:8080/");
});


