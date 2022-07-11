import React from "react";
import { Link ,NavLink} from "react-router-dom";

function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
   <>
     <h1>Navbar</h1>
       
        <NavLink   to="/">
         Home
        </NavLink>
        
        <NavLink  to="/airlines">
          Airlines
        </NavLink>
        <NavLink   to="/myprofile">
         My Profile
        </NavLink>
       
            <button onClick={handleLogoutClick}>Logout</button>
        
      
    </>
  );
}

export default Navbar;