const myModule = require('./myModule.js'); //calls onto myModule.js file within the same directory.

const directory = process.argv[2];
const extension = process.argv[3];

myModule(directory, extension, (err, filteredList) => { //availavle after callback function calls 'filtered' in the myModule.js file.
    if (err) return console.error(err); //error filtering.
    filteredList.forEach(file => { //go through filtered list, each one containing a file.
        console.log(file); //prints file into console.
    });
});