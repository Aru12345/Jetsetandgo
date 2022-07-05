import React,{useState} from "react";

function LogIn(){

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    return (
        <>
        <form>
            <label>
                Email
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />

            </label>
            <input type="submit" value="Login!" />
        </form>
     
        </>
    )
}
export default LogIn;