const fs = require('fs');

console.log('Start');

const data = fs.readFileSync('./walmart.txt');// block here until file read is complete
console.log(data);

console.log('End');