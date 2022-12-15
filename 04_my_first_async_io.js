const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, string) => { //uses filesystem to read and print number of newlines
    if (err) return console.error(err);
    const result = string.split('\n').length - 1;
    console.log(result);
});