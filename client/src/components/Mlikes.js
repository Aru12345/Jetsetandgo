import { useState,useEffect } from "react";

function Mlikes(){
    const [mlike,setmlike]=useState([]);

    useEffect(()=>{
        fetch("/mlikes")
        .then(res=>res.json())
        .then(airData=>{
          setmlike(airData)
        })
      
       },[])
      
       const{image,date,destination,seat,description,likes,dislikes,user:reviewuser}=mlike;
    return(
        <>
        <h1>Hi</h1>
        <img  className="cardimg" src={image} />
        <p></p>
        <h6>{date}</h6>
        <h5>{destination}</h5>
        <h5>{seat}</h5>
        <h1>{description}</h1>
        </>
    )
}
export default Mlikes;