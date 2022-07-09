import React from "react";
import { NavLink ,Navigate} from "react-router-dom";
function Navbar({setCurrentUser}){

    const handleLogout = () => {
        fetch("/logout", {
          method: 'DELETE'
        })
        console.log('logged out')
        setCurrentUser(null)
      }
    
   
    return(
        <>
        <h1>Navbar</h1>
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/airlines">Airlines</NavLink></li>
            <li><NavLink to="/myprofile">MyProfile</NavLink></li>
            <button onClick={handleLogout}>Logout</button>
        </ul>
        </>
    )
}
export default Navbar;