import React from "react";
import { Link } from "react-router-dom";
function Navbar({currentUser,setCurrentUser,handleLogout}){

    const LoggedOutLinks=()=>{
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">LogIn</Link></li>
        </ul>
    )
    }

  
    const LoggedInLinks=()=>{
        return(
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/airlines">Airlines</Link></li>
                <li><Link to="/myprofile">MyProfile</Link></li>
                <li><a  href="#" onClick={handleLogout}>LogOut</a></li>
            </ul>
        )
        }



    return(
        <>
        <h1>Navbar</h1>
        {currentUser? LoggedInLinks():LoggedOutLinks()}
        </>
    )
}
export default Navbar;