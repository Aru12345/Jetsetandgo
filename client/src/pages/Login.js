import LoginForm from "../components/Authentication/LoginForm";
import SignUpForm from "../components/Authentication/SignupForm";
import { useState } from "react";
function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);

    return (
      <>
        
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            
            <p>
              Don't have an account? &nbsp;
              <button  onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
           
            <p>
              Already have an account? &nbsp;
              <button  onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
      </>
    );
}
export default Login;