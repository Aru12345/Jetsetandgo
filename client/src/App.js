// client/src/components/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import MyReviews from "./components/MyReviews";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [myReviewsArray, setMyReviewsArray] = useState([]);
  const[airlines,setAirlines]=useState([]);
   
  useEffect(() => {
    // auto-login
    fetch("/me", { credentials: "same-origin" }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);

  useEffect(() => {
    document.title = "JetSetGo";
  }, []);

  const displayedAirlines = airlines.filter((airline) => {
    return airline.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleAddReviews(newReview) {
    setReviews([...reviews, newReview]);
  }

  function addReviewsToState(reviewObj) {
    setMyReviewsArray([...myReviewsArray, reviewObj]);
  }
  function handleDeleteReview(deletedReview) {
    setReviews((reviews) =>
      reviews.filter((review) => review.id !== deletedReview.id)
    );
  }

  if (!user) return <Login error={'please login'} onLogin={setUser} />;

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route
            exact
            path="/airlines"
            element={
              <>
           
                <Airlines airlines={airlines} setAirlines={setAirlines} />
              </>
            }
          />

          <Route
            exact
            path="/myprofile"
            element={
              <>
                <MyProfile
                  myReviewsArray={myReviewsArray}
                  setMyReviewsArray={setMyReviewsArray}
                  user={user}
                />
              </>
            }
          />

          <Route
            exact
            path="/airlines/:id"
            element={
              <Reviews
                reviews={reviews}
                setReviews={setReviews}
                
              />
            }
          />

          <Route
            path="/airlines/:id/reviews/new"
            element={
              <AddreviewForm onAddReview={handleAddReviews} user={user} />
            }
          />

          <Route exact path="/" element={<Home user={user} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
