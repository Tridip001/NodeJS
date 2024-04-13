//Import Libarary to read file.

const fs = require('fs');

//const buffer = fs.readFileSync('data.txt',{encoding: 'utf-8'});

// to Create a File:
try{
fs.writeFileSync('Student.txt','Name: Rahul raj, Rollno: 121 , Class: 6 , Section: B ');
} catch(err){
    console.log(err);
}
// Append data to excisting file:
// if file is not exist it will create a file and append data.

try{
    fs.appendFileSync('Student.txt','Name: Puja Kini RollNo: 123 , Class: 8 , Section: A ');
}catch(err){
    console.log(err);
}

// How to Delete a file:
try{
fs.unlinkSync('student.txt');
}catch(err){
    console.log('File not exists.\n');
}