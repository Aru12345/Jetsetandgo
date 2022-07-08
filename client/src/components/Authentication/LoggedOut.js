import { useEffect } from "react";
import { Navigate, Routes, Route,Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useHistory } from 'react-router-dom';

const LoggedOut = ({setCurrentUser}) => {

  useEffect(() => {
    <Navigate to="/login" />

  }, [])
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<Login setCurrentUser={setCurrentUser}/>} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default LoggedOut;