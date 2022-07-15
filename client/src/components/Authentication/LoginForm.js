

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import "./Login.css"
function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
   <div className="loginform">
    
   <h1 className="heading">JetSetGo.com</h1>
 
    <form onSubmit={handleSubmit}  className="lform">
    <div className="mb-3">
        <label htmlFor="email"  className="form-label thelabel" >Email</label>
        <input
          type="text"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <div className="mb-3"> 
        <label htmlFor="password"  className="form-label thelabel">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
     </div> 
        <button type="submit" className="btn btn-primary" >
          {isLoading ? "Loading..." : "Login"}
        </button>
      
      
      
    </form>
    
    </div>
  );
}
export default LoginForm;