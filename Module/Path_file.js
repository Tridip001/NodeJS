const fs = require('fs');
const path = require('path');


const filePath = path.join('Path','new','path.txt');

// giving Absolute Path:
const filePathResolve = path.resolve('Path','new','path.txt');
console.log(filePath);
console.log(filePathResolve);

fs.readFile(filePath, 'utf-8',(err,data)=>{
 
    if(err){
        console.log('file is not exist!');
    }else{
        console.log(data);
    }
});