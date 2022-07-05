// client/src/components/App.js
import React from "react";
import Home from "./Home";
import LogIn from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

import { Route,Switch } from 'react-router-dom';
function App() {
 

  return (
    <>
    <Navbar />
    <Switch>
          
          <Route path="/signup" ><Signup/></Route>
          <Route path="/login" element={<LogIn />}><LogIn /></Route>
          <Route path="/" element={<Home />}><Home /></Route>
      
    </Switch>
  
   
    </>
  );
}

export default App;