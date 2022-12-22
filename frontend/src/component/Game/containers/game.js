import React, { useState } from 'react';
import { io } from "socket.io-client";
import { Navigation } from '../../Navigation/navigation';
import { Chat } from '../../Chat/chat';


const socket = io('http://localhost:8084');
export const Game = (props)=>{
    const [text, setText] = useState(<Navigation />);
    socket.on("connect", () => {
        setText(<><Navigation /><Chat socket={socket} /></>);
    });
    return(<>{text}</>)
}