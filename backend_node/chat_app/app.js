const express = require('express');
const app = express();
const PORT = 8083;
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});


let users = [];


io.on('connection', (socket) => {

  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('message', (data) => {
    console.log(data);
    io.to(data.room).emit('messageResponse', data);
  });

  socket.on('newUser', (data) => {
    socket.join(data.room);
    users.push(data);
    io.to(data.room).emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    users = users.filter((user) => user.socketID !== socket.id);
    io.emit('newUserResponse', users);
    socket.disconnect();
  });
});


http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});