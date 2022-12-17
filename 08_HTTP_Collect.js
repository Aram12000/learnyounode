// const http = require('http');
// const bl = require('bl');

// const url = process.argv[2];

// http.get(url, response => {
//     response.pipe(bl((err, data) => {
//       if (err) return console.error(err);
//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     }));
// });


//answer without downloading 'bl'.

const http = require('http');

const url = process.argv[2];

http.get(url, response => { //grants response object from 'http'.
  let result = "";
  response.setEncoding('utf8'); //Data from response needs to be encoded with 'utf8' since it is buffer object.

  response.on('error', (err) => { //Returns error in console if an error is encountered.
        console.error(err);  
    });

  response.on('data', (data) => { //Conactinate result with data.
    result += data;
  });

  response.on('end', () => {
    console.log(result.length); //logs number of characters.
    console.log(result);  //logs results itself.
  });
});