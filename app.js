const path = require('path');

let pathObj = path.parse(__filename);
console.log('Actual', __filename);
console.log('Parsed', pathObj);