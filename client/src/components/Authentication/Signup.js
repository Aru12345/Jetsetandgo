import React,{ useState } from "react";
import { baseUrl } from "../../Global";
import { headers } from "../../Global";
import { Link } from "react-router-dom";
function Signup({loginUser}){
    
    const [formData,setFormData]=useState({
        name: "",
        password: "",
        email: ""
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      

      const handleSubmit =e => {
        e.preventDefault();
        const userCreds = { ...formData };
        
        fetch('/users',{
          method:"POST",
          headers,
          body: JSON.stringify(userCreds),
        })
        .then((r) => r.json())
        .then((user) => {
          console.log(user);
          setFormData({
            name: "",
            password: "",
            email: ""
          });
        });

      }
      
    return (
        <>
        <h1>Create Account </h1>
        <form  onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}  />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
            </div>

            <input type="submit" value="Create Account" />
        </form> 
        <Link to="/" replace>
        Already have an Account?Log in
      </Link>

    
        </>
    )
}
export default Signup;