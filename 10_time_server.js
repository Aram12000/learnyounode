const net = require('net')

function zeroFill(i) {  //Tramsmission Control Protocol is created (TCP).
  return (i < 10 ? '0' : '') + i //zero fills results, 5 o'clock is displayed as 5:00.
} //if 'i' is less than 10, adds '0' in front of 'i'. '0' + i.

function now () { //writes date and time in 24 hour format.
  const a = new Date() //date assigned to variable 'a', which is used to get proper date.
  return a.getFullYear() + '-'
    + zeroFill(a.getMonth() + 1) + '-'
    + zeroFill(a.getDate()) + ' '
    + zeroFill(a.getHours()) + ':'
    + zeroFill(a.getMinutes())
}

const server = net.createServer(function (socket) { //accepts callback, which accepts socket to display date and time to socket.
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))



//Solution with 'npm install moment'.

// const net = require('net');
// const moment = require('moment');

// const port = process.artgv[2];

// const server = net.createServer(socket => {
//     const time = moment().format('YYY-MM-DD hh:mm');
//     socket.write(time);
//     socket.remoteAddress('\n');
// });

// server.listen(port);