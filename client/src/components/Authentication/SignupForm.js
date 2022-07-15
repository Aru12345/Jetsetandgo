import React, { useState } from "react";
import "./Login.css"

function SignUpForm({ onLogin }) {
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
       email,
        password,
       
      }),
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
    <h1 class="heading">JetSetGo.com</h1>
    <form onSubmit={handleSubmit}  class="lform">
    <div class="mb-3">
        <label htmlFor="name" class="form-label thelabel" >Name</label>
        <input
          type="text"
          id="name"
          value={name}
          class="form-control thelabel"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="mb-3">
     <label htmlFor="email" class="form-label thelabel">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          class="form-control thelabel"
          onChange={(e) => setEmail(e.target.value)}
          
        />
      </div>
      <div id="emailHelp" class="form-text note">We'll never share your email with anyone else.</div>
      <div class="mb-3">
     
        <label htmlFor="password" class="form-label thelabel">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          class="form-control thelabel"
          onChange={(e) => setPassword(e.target.value)}
       
        />
     
      </div> 
        <button type="submit" class="btn btn-primary">{isLoading ? "Loading..." : "Sign Up"}</button>
     
    
    </form>
    </div>
  );
}

export default SignUpForm;