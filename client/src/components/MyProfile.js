import { useEffect, useState } from "react";
import MyReviews from "./MyReviews";
function MyProfile({user}){
    
    const [u,setu]=useState([{reviews:[]}])
    let data=[]
    

    
  useEffect(()=>{
    fetch("/u")
    .then(res=>res.json())
    .then(reviewData=>{
        data=reviewData
       
        data=data.filter((current_data)=>{
            return current_data.email==user.email
          
        })
        
        setu(data)
      
    })
  },[])

 
    return(
        <>
        
        
        {u[0].reviews.map((u)=>(
        <MyReviews key={u.id} id={u.id} u={u}/>
      
       ))
     
      
       }

        </>
    )
}
export default MyProfile;