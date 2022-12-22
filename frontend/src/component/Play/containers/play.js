import React, {useState} from 'react';
import { io } from "socket.io-client";
import { CardSelection } from '../components/cardSelection';
import { WaitRoom } from '../components/waitRoom';
import { Game } from '../../Game/containers/game';
import { Chat } from '../../Chat/chat';

const socket = io('http://localhost:8085');



export const Play = (props)=>{
    const [view,setView] = useState("cardSelection");
    const [user1,setUser1]= useState(null);
    const [user2,setUser2]= useState(null);
    const [room,setRoom]=useState(null);
    socket.on("connect", () => {
    });

    
    function startGameHandle(){
        setView("wait");
        socket.emit("newPlayerIsWaiting",props.user);        
        socket.on("launchGame",function(player1, player2,room){
            setUser1(player1);
            setUser2(player2);
            setRoom(room);
            setView("game");
            
        });
    }
    let render;
    switch(view){
        case "cardSelection":
            render = (<CardSelection card={props.user.cardList} startGameHandle={startGameHandle}></CardSelection>)
            break;
        case "wait":
            render = (<WaitRoom />)
            break;
        case "game":
            render = (<><Chat room={room} user={props.user} player1={user1} player2={user2}></Chat>    
            <Game user={props.user} socket={socket} player1={user1} player2={user2}/></>)
            break;

    }

    return (<>{render}</>)
    
  }
  

