import React from "react";
import { Link ,NavLink} from "react-router-dom";
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
    <nav class="nav navbarstyle">
  <a class="nav-link  nlink"  href="/"> Home</a>
  <a class="nav-link nlink" href="/airlines">  Airlines</a>
  <a class="nav-link nlink" href="/myprofile"> My Profile</a>
  <button type="button" class="btn btn-primary logoutbtn"onClick={handleLogoutClick}>Logout</button>
</nav>

  );
}

export default Navbar;