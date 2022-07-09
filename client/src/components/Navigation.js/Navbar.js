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
       
         
            <button as={Link} to="/">
         Home
        </button>
            <button as={Link} to="/airlines">
          Airlines
        </button>
            <button as={Link} to="/myprofile">
         My Profile
        </button>
            <button onClick={handleLogoutClick}>Logout</button>
        
      
    </>
  );
}

export default Navbar;