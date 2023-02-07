const express = require('express');
const app = express();
const PORT = 8085;
const http = require('http').Server(app);
const io = require('socket.io')(http, {

    cors: {

        origin: "*"

    }

});

//app.use(express.static('public'));



let list_users_playroom = [];

let rooms =[];



io.on('connection', (socket) =>{
  console.log('Nouvel utilisateur.');
  
  
  socket.on('newPlayerIsWaiting',user =>{
    if(typeof list_users_playroom !== 'undefined' && list_users_playroom.length > 0){
      console.log("Il y a deja un utilisateur en attente.");
      //Création d'une nouvelle partie

      let player1 = list_users_playroom[0];
      let player2 = user;
      
      console.log(player1.id);
      console.log(player2.id);
      
      if(player1.id!==player2.id){
          player2.socketID = socket.id;
          socket.join(player1.socketID);
          //require('child_process').fork('../micro-game/app.js',[player1,player2,socket.id]);

          //Retirer premier joueur de la liste
          list_users_playroom.shift(); 
          io.to(player1.socketID).to(player2.socketID).emit("launchGame",player1, player2,player1.socketID);

          console.log("player1socketID"+player1.socketID);
          console.log("player2socketID"+player2.socketID);

      }else{
          let User = {};
          User = user;
          User.socketID = socket.id;
          list_users_playroom.push(User);
      }

  }else{
      console.log("Pas d'utilisateur en attente.");
      
      let User = {};
      User = user;
      User.socketID = socket.id;
      list_users_playroom.push(User);
      socket.join(socket.id);
      rooms.push(socket.id);
  }
  })

socket.on('logout',function(user){
})

socket.on('disconnect',function(){
    console.log("Une personne s'est deconnectee.");
    const index = rooms.indexOf(socket.id);
    if(index!=-1){
      const x = rooms.splice(index, 1);
    }
    io.emit("someoneHasBeenDeconnected",socket.id);
})
})

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});