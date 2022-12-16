const fs = require('fs');   //requires filesystem module through 'const fs'.
const path = require('path');   

const directory = process.argv[2];
const extension = `.${process.argv[3]}`;    //uses string concatination to put javascript expression and evaluate into a string.

fs.readdir(directory, (err, list) => {  //uses filesystem to read directory.
    if (err) return console.error(err); //returns error in console if an error is encountered.
    list.forEach(file => {
        if (path.extname(file) === extension) { //logs file entension type along with file name.
            console.log(file);  //logs file output into console.
        }
    });
});