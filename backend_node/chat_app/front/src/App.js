import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4000";

const socket = socketIOClient(ENDPOINT);

function App() {

  return (

    <BrowserRouter>

      <div>

        <Routes>

          <Route path="/" element={<Home socket={socket} />}></Route>

          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>

        </Routes>

      </div>

    </BrowserRouter>

  );

}


export default App;
