import React,{ useState } from "react";
import { baseUrl } from "./Global";
import { headers } from "./Global";
function Signup(){

    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        const strongParams ={
            user: {
                email,
                password
            }
        }

        fetch(baseUrl +'/users',{
            method: 'POST',
            headers,
            body:JSON.stringify(strongParams)
        })
    }
    return (
        <>
        <h1>Create Account </h1>
        <form >
            <div>
                <label for="email">Email:</label>
                <input type="text" name="email" id="email" value={email} onChange={e=> setEmail(e.target.value)} />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="text" name="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </div>

            <input type="submit" value="Create Account" />
        </form>
        </>
    )
}
export default Signup;