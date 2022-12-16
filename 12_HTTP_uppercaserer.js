const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((request, response) => {    //creates server with callback function and response. Ensures requests server recieves are post requests.
    if (request.method !== 'POST') return response.end('This server only accepts POST');    //if method is not equal to post, will respond with message.

    request.pipe(map(chunk => {
        return chunk.toString().toUpperCase();  //makes each chunk of data uppercase.
    })).pipe(response);     //pipes response to display an output.
});

server.listen(port);