// Sending Html file By Server.
const http = require('http');
// we need to read this file which you want to send in server.
// for this use this libarary

const fs = require('fs');
const server = http.createServer((req, res) => {
 const data=    fs.readFileSync("index.html").toString();
    res.end(data);
});

server.listen(45900,()=>{
    console.log(`Server is running at port 45900`);
});

