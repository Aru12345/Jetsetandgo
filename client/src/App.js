// client/src/components/App.js
import React, { useEffect, useState } from "react";
import { Routes ,Route } from 'react-router-dom';

import Airlines from "./components/Airlines";
import MyProfile from "./components/MyProfile";
import Home from "./components/Home";
import Navbar from "./components/Navigation.js/Navbar";
import LoginForm from "./components/Authentication/LoginForm";
import Login from "./pages/Login";
import SignUp from "./components/Authentication/SignupForm";



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
       <Navbar user={user} setUser={setUser} />
       <main>
        <Routes>

          <Route exact={true}  path="/airlines" element={<Airlines />} />
           
          <Route exact={true}  path="/myprofile" element={<MyProfile />} />
           
          <Route exact={true} path="/" element={<Home user={user}/>} />
            
        </Routes>
      </main>

  </>
  );
  
}

export default App;