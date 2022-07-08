// client/src/components/App.js
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import LoggedOut from "./components/Authentication/LoggedOut";
import LoggedIn from "./components/Authentication/LoggedIn";
function App() {
  const[currentUser,setCurrentUser]=useState({})
  const [authenticated, setAuthenticated] = useState(false);
  
  
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

  
  return (
    <>
    
    <h1>Welcome to JetSetGo.com!</h1>
    <Router>
    {currentUser ? (
          <LoggedIn
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <LoggedOut setCurrentUser={setCurrentUser} />
        )}
    </Router>

  
 </>
  );
  
}

export default App;