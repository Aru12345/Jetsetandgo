import { useEffect, useState } from "react";
import MyReviews from "./MyReviews";
function MyProfile({user}){
    
    const [u,setu]=useState([{reviews:[{image:"xxx",destination:"newyork",date:"3/12/2022",description:"good",user:{name:"jhon"},id:5}]}])
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
         console.log(data[0].reviews)
    })
  },[])

 
    return(
        <>
        {console.log("u: ",u[0].reviews)}
        <h1>This is my prfoile.</h1> 
        {u[0].reviews.map((u)=>(
        <MyReviews key={u.id} id={u.id} u={u}/>
       ))

       }

        </>
    )
}
export default MyProfile;