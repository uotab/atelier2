import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import ChatBar from './components/chatBar';

import ChatBody from './components/chatBody';

import ChatFooter from './components/chatFooter';

const socket = io('http://localhost:8083');


export const Chat = (props) => {

  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState(props.user.login);

  
  useEffect(()=>{
    socket.emit('newUser', {userName: userName, socketID: socket.id,room:props.room });
  },[]);
  
  


  useEffect(() => {

    socket.on('messageResponse', (data) => setMessages([...messages, data]));

  }, [socket, messages]);


  return (

    <div className="chat">

      <ChatBar socket={socket} user={props.user} room={props.room}/>

      <div className="chat__main">

        <ChatBody messages={messages} room={props.room} />

        <ChatFooter socket={socket} room={props.room}/>

      </div>

    </div>

  );

};