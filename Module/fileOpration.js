//Libarairy Require.

const fs = require('fs');

console.log('Starting to Read....\n');
/*
const buffer = fs.readFileSync('data.txt');
// you don't have to do that if you are using utf-8

console.log(buffer.toString());
*/

const buffer = fs.readFileSync('data.txt',{encoding: 'utf-8'});

console.log(buffer);

console.log('File Readed Successfully.\n');