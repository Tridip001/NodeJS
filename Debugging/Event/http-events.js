const http = require("http");

const server = http.createServer((req,res)=>{

    if(req.method == 'POST'){
        console.log(req.body);
     // expecting data from client
        let body = '';   
        req.on('data',(chunk)=> {
            body +=chunk.toString();
        });
      req.on("end", ()=>{
        console.log(body);
        res.end("Data is Recived");
      });  
    }else{
        console.log("Function end here\n");
        res.end('<h1> Welcome to Bingo app server <\h1>');
    }

});

server.listen(3100);
console.log("Server is listen on port 3100\n");