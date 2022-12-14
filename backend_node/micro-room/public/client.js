const socket = io('http://localhost:3000');

const switchBtn = document.getElementById('ConnectionToRoom');


let clientRoom;

// socket.on('serverToClient', (data) => {
//     alert(data);
// })
//socket.emit('clientToServer',"Hello server!");

socket.on('serverMsg',(data) =>{
    console.log(`Ohlala je suis dans la Room No.${data}`);
    clientRoom = data;
})

socket.on('switchFromServer', () =>{
    if(document.body.style.background === "darkgray" ){
        document.body.style.background = "white"}
        else{
            document.body.style.background = "darkgray"

        }
})

switchBtn.addEventListener('click',() =>{
    socket.emit('buttonPressed', clientRoom)

    });
