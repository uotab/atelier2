import React, { useState, useEffect } from 'react';


const ChatBar = (props) => {
  let socket = props.socket;
  const [users, setUsers] = useState([]);


  useEffect(() => {

    socket.on('newUserResponse', (data) => setUsers(data));

  }, [socket, users]);


  return (

    <div className="chat__sidebar">

      <h2>Open Chat</h2>

      <div>

        <h4 className="chat__header">ACTIVE USERS</h4>

        <div className="chat__users">

          {users.filter((user) => (user.room == props.room && user.userName != props.user.login))
                .map((user) => (

            <p key={user.socketID+user.room}>{user.userName}</p>

          ))}

        </div>

      </div>

    </div>

  );

};


export default ChatBar;