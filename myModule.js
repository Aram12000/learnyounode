const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => { //exports function that takes directory, extension, callback. Exports as a function to be used in 06_make_it_modular.js file.
    ext = `.${ext}`;
    fs.readdir(dir, (err, list) => { //redirectory method to take callback that will accept error and list.
        if(err) return callback(err); //if there is an error, error will return to callback.

        const filtered = list.filter(file => path.extname(file) === ext); //if no error, it will continue to list, which will also be filtered.

        return callback(null, filtered); //array of filtered names return to callback. if there are no errors, it will execute filter of array of file names.
    });
}