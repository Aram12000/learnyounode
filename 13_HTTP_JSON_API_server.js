const http = require('http')  //passed http module through const http.
var url = require('url')  //passed url module through var url.

var port = process.argv[2]

var parseTime = function (time) { //accepts argument 'time' and returns hour, minute, second.
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixTime (time) {  //accepts arguemt 'time' and calls to return time value.
  return {unixtime: time.getTime()}
}

var parseQuery = function (url) { //accepts argument 'url'
  switch (url.pathname) { //switch statement to parse url. Switch statement used to direct addition urls to endpoints without if/else statements.
    case '/api/parsetime':  
      return parseTime(new Date(url.query.iso)) //if path is '/api/parsetime' returns result of parseTime funtion, passed through Date() object.
    case '/api/unixtime':
      return unixTime(new Date(url.query.iso))  //if path is '/api/unixtime' returns result of unixTime funtion, passed through Date() object.
    default: return 'invalid endpoint url' //message displayed if value of url.pathname != either endpoint.
  }
}

http.createServer(function (request, response) {  //server created after all functions are declared/
  if (request.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'application/json'}) //status 200 and content type displayed if request method = 'GET'.
    url = url.parse(request.url, true)  //Parse 'request.url' value parse method, assigned to variable url.
    response.end(JSON.stringify(parseQuery(url))) //converts result to JSON object and passes to response.end().
  } else {
    response.writeHead(405) //status 405 if request method != 'GET'.
    response.end()
  }
}).listen(+port, function () {  //listens to port passed in first argument.
  console.log('Server listening on http://localhost:%s', port)  //logs server url to console.
})