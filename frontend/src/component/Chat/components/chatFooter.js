import React, { useState } from 'react';

const ChatFooter = (props) => {

  const [message, setMessage] = useState('');
  const [socket,setSocket] = useState(props.socket);

  const handleSendMessage = (e) => {

    e.preventDefault();

    if (message.trim()) {

      socket.emit('message', {

        text: message,

        id: `${socket.id}${Math.random()}`,

        socketID: socket.id,

        room:props.room
      });

    }

    setMessage('');

  };

  return (

    <div className="chat__footer">

      <form className="form" onSubmit={handleSendMessage}>

        <input

          type="text"

          placeholder="Write message"

          className="message"

          value={message}

          onChange={(e) => setMessage(e.target.value)}

        />

        <button className="sendBtn">SEND</button>

      </form>

    </div>

  );

};


export default ChatFooter;