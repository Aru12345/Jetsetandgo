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
import Reviews from "./components/Reviews";
import AddreviewForm from "./components/AddreviewForm";

function App() {
  const [user, setUser] = useState(null);
  const[reviews,setReviews]=useState([]); 
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
  

 
 function handleAddReviews(newReview){
  
  setReviews([...reviews,newReview]);
 
}




  if (!user) return <Login onLogin={setUser} />;

  
  return (
    <>
       <Navbar user={user} setUser={setUser} />
       <main>
        <Routes>

          <Route exact  path="/airlines" element={<><Search search={search} onSearchChange={setSearch} /><Airlines  /></>} />
           
          <Route exact  path="/myprofile" element={<MyProfile />} />
          
       
          <Route exact  path="/airlines/:id" element={<Reviews reviews={reviews} setReviews={setReviews} />} />
           
          <Route path="/airlines/:id/reviews/new" element={ <AddreviewForm onAddReview={handleAddReviews}/>} />
        
          <Route exact path="/" element={<Home user={user}/>} />
        
        </Routes>
      </main>

  </>
  );
  
}

export default App;