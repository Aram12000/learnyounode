const fs = require('fs');   //requires filesystem module through 'const fs'.

fs.readFile(process.argv[2], 'utf8', (err, string) => { //uses filesystem to read and print number of newlines.
    if (err) return console.error(err); //iff error is present, log an error.
    const result = string.split('\n').length - 1;   //splits by new line.
    console.log(result);    //logs result in console.
}); //function ('fs.readFile') is called whenever buffer is ready. Code below this line will execute first until buffer is ready.