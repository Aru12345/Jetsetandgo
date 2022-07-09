

import React, { useState } from "react";


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
   <>
   <h1>JetSetGo.com</h1>
    <form onSubmit={handleSubmit}>
  
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
     
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
        <button  type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      
       
      
    </form>
    </>
  );
}
export default LoginForm;