import LoginForm from "../components/Authentication/LoginForm";
import SignUpForm from "../components/Authentication/SignupForm";
import { useState } from "react";
import "../components/Authentication/Login.css"
function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);

    return (
      <>
        
        {showLogin ? (
          <div>
            <LoginForm onLogin={onLogin} />
            
            <p class="thelabel forsup">
              Don't have an account? 
              <button class="btn btn-primary signupbtn"  onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </div>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
           
            <p class="thelabel forsup">
              Already have an account? &nbsp;
              <button  class="btn btn-primary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
      </>
    );
}
export default Login;