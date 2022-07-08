import Navbar from "../Navigation.js/Navbar";
import Header from "../Header";
import Routing from "../Routing";

const LoggedIn = ({ currentUser, setCurrentUser }) => {
  return (
    <div>
   
      <h1>Welcome, {currentUser.name}</h1>
      <Navbar setCurrentUser={setCurrentUser}/>
      
      <Routing />
    </div>
  );
};

export default LoggedIn;