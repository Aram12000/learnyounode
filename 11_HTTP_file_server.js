const http = require('http')  //passed http module through const http.
const fs = require('fs')  //passed filesystem module through const fs.

const port = process.argv[2]
const file = process.argv[3]


const a = http.createServer(function (request, response) { //passes a callback function that takes arguments request and response.
  fs.createReadStream(file).pipe(response)  //method to stream file to memory.
})
a.listen(+port, function () { //listens on port via 'const port = process.argv[2]'.
  console.log('Server listening on http://localhost:%s', port)
})