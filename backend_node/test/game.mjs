var express = require('express');
var app = express();
const io = require('socket.io');
const ioServer = io(server);

global.CONFIG = require('./config.json');

ioServer.on('connection', function(socket){
    console.log('a user connected');
    socket.on('myEvent1', function(data) {
// Do stuff
        socket.emit('myEvent2', data);
    });
});
var server = app.listen(CONFIG.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});