const http = require('http');   //requires http module through 'const http'.

const url = process.argv[2];

//uses stream object to constantly flow data.
http.get(url, (response) => {   //callback with response as the only argument.
    response.on('error', (err) => console.error(err)); //returns error in console if an error is encountered.
    response.setEncoding('utf8');   //sets encoding to display strings instead of buffers.
    response.on('data', data => {   //if no error exists, returns proper data.
        console.log(data);  //logs the data back into console.
    });
});