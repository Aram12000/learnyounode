const fs = require('fs'); //requires filesystem module through 'const fs'.

const buffer = fs.readFileSync(process.argv[2]); //gives contents as buffer

const result = buffer.toString().split('\n').length - 1; //converts buffer to string

console.log(result);  //logs result in console.