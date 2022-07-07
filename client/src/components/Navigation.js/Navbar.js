import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <h1>Navbar</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">LogIn</Link></li>
        </ul>
        </>
    )
}
export default Navbar;