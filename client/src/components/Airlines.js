import AirlinesCard from "./AirlinesCard";
import { useState,useEffect } from "react";

function Airlines(){
    const[airlines,setAirlines]=useState([]);

    useEffect(()=>{
        fetch("/airlines")
        .then(res=>res.json())
        .then(airData=>{
          setAirlines(airData)
        })
      
       },[])
      
       
    return(
        <>
        <h1>Airlines</h1>
       {airlines.map((airline)=>(
        <AirlinesCard key={airline.id} airline={airline}/>
       ))

       }
        </>
    )
}
export default Airlines;