const fs = require('fs');

console.log('Start');

// const data = fs.readFileSync('./walmart.txt');// block here until file read is complete
// console.log(data);

fs.readFile('./walmart.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) console.log(err);
    console.log(data);
})

console.log('End');