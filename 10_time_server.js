const net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))





// const net = require('net');
// const moment = require('moment');

// const port = process.artgv[2];

// const server = net.createServer(socket => {
//     const time = moment().format('YYY-MM-DD hh:mm');
//     socket.write(time);
//     socket.remoteAddress('\n');
// });

// server.listen(port);