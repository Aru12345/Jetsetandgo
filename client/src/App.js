// client/src/components/App.js
import React, { useState,useEffect } from "react";
import Navbar from "./components/Navigation.js/Navbar";
import Home from "./components/Home";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LogIn from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";

import LoggedOut from "./components/Authentication/LoggedOut";
import LoggedIn from "./components/Authentication/LoggedIn";
function App() {
  const[currentUser,setCurrentUser]=useState({})
  const [authenticated, setAuthenticated] = useState(false);
  console.log(currentUser);
  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated) {
    return <div></div>;
  }

  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(res => {
          if (res.ok) {
            setCurrentUser(({}));
            setAuthenticated(false);
          }
        })
  }
  
  return (
    <>
 
     <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogout={handleLogout}/>
     {currentUser ? (
          <LoggedIn
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <LoggedOut setCurrentUser={setCurrentUser} />
        )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup  />} />
      </Routes>


  
 </>
  );
  
}

export default App;