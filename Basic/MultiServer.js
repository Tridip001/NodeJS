// Import Http Libarary:
const http = require('http');

// Create a server:
const server =  http.createServer((req, res) => {
    console.log(req.url); 
// it's not end of respose . it's just write in specific notes send to server.
    res.write('Welcome to HappyHub.com\n');

    if(req.url == "/product"){
       res.write("Hello Bro! Looking For Product Right😎😁\n");    
    return res.end("Hello this is Product info Server");
    }
    else if(req.url == "/user"){
        res.write('Alert! this is Not For User😤😠\n');
       return res.end("This is User Server. You are looking for user information.");
    }
    res.end('Welcome to NodeJs Code Backend Server.');
});

// specify a port to listen to client request:
server.listen(8000,()=>{
    console.log("Server is Listening  on Port 8000");
});
