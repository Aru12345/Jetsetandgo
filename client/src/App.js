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
import Search from "./Search";


function App() {
  const [user, setUser] = useState(null);
  const[airlines,setAirlines]=useState([]);
  const[search,setSearch]=useState("");

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    document.title = "JetSetGo"
 }, []);
  
 useEffect(()=>{
  fetch("/airlines")
  .then(res=>res.json())
  .then(airData=>{
    setAirlines(airData)
  })

 },[])

 const displayedAirlines=airlines.filter((airline)=>{
  return airline.name.toLowerCase().includes(search.toLowerCase());
 })

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
       <Navbar user={user} setUser={setUser} />
       <main>
        <Routes>

          <Route exact={true}  path="/airlines" element={<><Search search={search} onSearchChange={setSearch} /><Airlines airlines={displayedAirlines} /></>} />
           
          <Route exact={true}  path="/myprofile" element={<MyProfile />} />
           
          <Route exact={true} path="/" element={<Home user={user}/>} />
            
        </Routes>
      </main>

  </>
  );
  
}

export default App;