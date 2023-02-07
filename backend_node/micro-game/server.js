const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require ("socket.io");
const { argv } =require('node:process');
const CardDTO = require("../model/Card");
const UserDTO = require("../model/User");


app.use(express.static('public'));

const port = process.env.PORT || 3000;
const io = new Server(server); 

argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});


http.get('http://localhost:8082/user/'+argv[2], (resp) => {
  let data = '';

  // Un morceau de réponse est reçu
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // La réponse complète à été reçue. On affiche le résultat.
  resp.on('end', () => {
    console.log(data);
    const user = new UserDTO(data);
    console.log(user);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


let clientRoom = 2;
let listCard = user.get("cardList")
//io.to(clientRoom).emit("chooseCard",listCard);
io.on('gameClient', (socket) =>{
    
    socket.on('buttonPressed',clientRoom =>{
        io.to(clientRoom).emit('switchFromServer')
    })
})
  


