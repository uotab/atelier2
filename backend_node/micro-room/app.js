const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');

// On initialise une instance de socket.io en passant le server HTTP en Object. On écoute sur l'évelement connection pour les socket à venir et on le slog à la console.
const { Server } = require ("socket.io");
const io = new Server(server);
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/room.html');
  n = require('child_process').fork('../micro-game/server.js',["id1","id2","idroom"]);
 });


let clientNo = 0;
io.on('connection', (socket) =>{

    clientNo++;
    socket.join(Math.round(clientNo/2));
    socket.emit('serverMsg',Math.round(clientNo/2));

    socket.on('buttonPressed',clientRoom =>{
        io.to(clientRoom).emit('switchFromServer')
    })
})
    // socket.on('clientToClient',data =>{
    //     socket.broadcast.emit('serverToClient',data);
    // })

    // 

   // io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

server.listen(3000, () => {
  console.log('listening on *:3000');
});