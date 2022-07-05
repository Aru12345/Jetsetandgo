import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
        <h2>Navbar</h2>
        <ul>
            <l1><Link to="/">Homepage</Link></l1>
            <l1><Link to="/signup">Signup</Link></l1>
            <l1><Link to="/login">Login</Link></l1>
        </ul>
        </>
    )
}
export default Navbar;