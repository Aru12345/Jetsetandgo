import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Airlines from "./Airlines";
import MyProfile from "./MyProfile";
function Routing(){
    return(
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/airlines" element={<Airlines />} />
        <Route path="/myprofile" element={<MyProfile />}/>
        
        </Routes>
    )
}
export default Routing;