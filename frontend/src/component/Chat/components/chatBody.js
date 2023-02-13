import React from 'react';

import { useNavigate } from 'react-router-dom';


const ChatBody = ({ messages }) => {

  


  return (

    <>

      <header className="chat__mainHeader">

        <p>Hangout with Colleagues</p>

        

      </header>


      <div className="message__container">

        {messages.map((message) =>(

            <div className="message__chats" key={message.id}>

              <p className="sender__name">You</p>

              <div className="message__sender">

                <p>{message.text}</p>

              </div>

            </div>


        ))}


        <div className="message__status">

          <p>Someone is typing...</p>

        </div>

      </div>

    </>

  );

};


export default ChatBody;