const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
    //  Write your code here
    if(req.method == 'POST'){
      let body = "";
      req.on('data',(chunk)=>{
        body += chunk;
     
     });
      req.on('end',()=>{
       fs.appendFileSync('data.txt',body);
       console.log(fs.readFileSync('data.txt', "utf-8"));
      });
    }
  
    res.end("data received");
  });

  server.listen(3000, () => {
    console.log("server is listening at port 3000");
  });