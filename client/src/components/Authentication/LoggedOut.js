import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
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