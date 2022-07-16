import AirlinesCard from "./AirlinesCard";
import { useState,useEffect } from "react";

import "./Styling.css"
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
        <div class="airblock" >
      
       {airlines.map((airline)=>(
        <AirlinesCard key={airline.id} airline={airline}/>
       ))

       }
       
        </div>
    )
}
export default Airlines;