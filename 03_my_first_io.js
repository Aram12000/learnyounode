const fs = require('fs'); 

const buffer = fs.readFileSync(process.argv[2]); //gives contents as buffer

const result = buffer.toString().split('\n').length - 1; //converts buffer to string

console.log(result);