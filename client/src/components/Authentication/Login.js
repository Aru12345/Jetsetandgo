
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({setCurrentUser}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setCurrentUser(user)
        setFormData({
          email: "",
          password: "",
        });
      });
  }

  return (
    <>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email: </label>
        <input
         
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
         
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />

      <Link to="/signup" replace>
        Don't have an account? Sign Up!
      </Link>
    </>
  );
};

export default Login;