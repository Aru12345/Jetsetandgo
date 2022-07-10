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
       
        <NavLink  exact={true} to="/">
         Home
        </NavLink>
        
        <NavLink exact={true} to="/airlines">
          Airlines
        </NavLink>
        <NavLink exact={true}  to="/myprofile">
         My Profile
        </NavLink>
       
            <button onClick={handleLogoutClick}>Logout</button>
        
      
    </>
  );
}

export default Navbar;