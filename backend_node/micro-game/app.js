const express = require('express');
const app = express();
const PORT = 8084;
const http = require('http').Server(app);
const io = require('socket.io')(http, {

    cors: {

        origin: "*"

    }

});

const { argv } =require('node:process');
const CardDTO = require("../model/Card");
const UserDTO = require("../model/User");


//app.use(express.static('public'));



/* http.get('http://localhost:8082/user/'+argv[2], (resp) => {
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
}); */



//let listCard = user.get("cardList")
//io.to(clientRoom).emit("chooseCard",listCard);
io.on('connection', (socket) =>{
    socket.join(argv[4]);
    socket.on('buttonPressed',clientRoom =>{
        io.to(clientRoom).emit('switchFromServer')
    })

    /* socket.on("attack", data=> {
      // On verifie que la carte qui defend a encore des points de vie
      if(data.defendingCard.hp>0){
          // On calcule les dommages qui vont etre envoyes.
          var realAttackValue = data.attackingCard.attack - data.defendingCard.defence;
          // Si les dommages sont negatifs ou nuls, l'attaque sera de 1 pdv
          if(realAttackValue<=0){
              realAttackValue=1;
          }

          // Si il reste des pdv a la carte qui se fait attaquer APRES CETTE ATTAQUE
          if(data.defendingCard.hp>realAttackValue){
              // On met a jour les pdv restant
              var newDefendingCardHp = data.defendingCard.hp - realAttackValue;
              console.log("J'envoie la nouvelle valeur de hp pour les joueurs: "+newDefendingCardHp);
              io.to(data.victim.socketID).emit("sendAttack",newDefendingCardHp);
              io.to(data.user.socketID).emit("confirmedAttack",newDefendingCardHp);
          }else{
              // La carte qui defend est tuee: le defenseur perds
              io.to(data.victim.socketID).emit("youLoose");
              // L'attaquant gagne
              io.to(data.user.socketID).emit("youWin");
          }
      }else{
          // la carte qui recoit l'attaque n'est pas autorisee a jouer: elle est deja tuee
      }

  }) */
})
  


http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});