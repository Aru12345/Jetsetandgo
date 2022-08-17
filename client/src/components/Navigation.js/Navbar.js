import React, { useState } from "react";
import "./Navbar.css"
function Navbar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
   


  return (
    <nav className="nav navbarstyle">
  <a className="nav-link  nlink"  href="/"> Home</a>
  <a className="nav-link nlink" href="/airlines">  Airlines</a>
  <a className="nav-link nlink" href="/myprofile"> My Profile</a>
  <button type="button" className="btn btn-primary logoutbtn"onClick={handleLogoutClick}>Logout</button>


</nav>

  );
}

export default Navbar;