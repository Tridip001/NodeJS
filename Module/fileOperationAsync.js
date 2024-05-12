//Import Readfile Libarary:
const fs = require('fs');

//file read:

fs.readFile('data.txt', (err,data)=>{

    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    } 
});

//write a file:
fs.writeFile('New.txt','This new file i Created', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File is Written.');
    }
});
// Append a File:
fs.appendFile('New.txt','\n Hi Bro Tridip is Writing', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File is Append.');
    }
});
// Delete file: before doing delte comment all code.
fs.unlink("New.txt", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File is deleted....');
    }
})

console.log("This is Async File System..");
