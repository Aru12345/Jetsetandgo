// client/src/components/App.js
import React from "react";
import Home from "./Home";
import LogIn from "./Login";
import Signup from "./Signup";

import { useState, useEffect } from "react";

import { Route,Switch } from 'react-router-dom';
function App() {
 

  return (
    <>
    <Switch>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" ><Signup/></Route>
          <Route path="/login" element={<LogIn />}></Route>
      
          </Switch>   
   
    </>
  );
}

export default App;