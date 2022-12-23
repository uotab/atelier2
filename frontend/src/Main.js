import logo from './logo.svg';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Home } from './component/Home/home';
import SignIn from './component/Auth/auth';
import { CardList } from './component/Market/CardList';
import { Play } from './component/Play/containers/play';
import { Market } from './component/Market/Market';


export const Main =(props) =>{
  const [userCurrent,setUser]=useState(null);
  const user = (userCurrent)=>{setUser(userCurrent)}
  return (
  <>
      <BrowserRouter>
        <NavLink to="/"> Login</NavLink>
        <NavLink to="/cards"> Cards</NavLink>


          <div>
              <Routes>
                  <Route path='/home' element={<Home/>} />
                  <Route path='/market' element={<Market/>} />
                  <Route path='/' element={<SignIn user={user}/>} />
				          <Route path='/play' element={<Play user={userCurrent}/>} />

              </Routes>
          </div>
      </BrowserRouter>
      
  </>
);
}
export default Main;