
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useState,useEffect } from "react";
function Reviews(){
  const[reviews,setReviews]=useState([]); 

  useEffect(()=>{
    fetch("/reviews")
    .then(res=>res.json())
    .then(reviewData=>{
      setReviews(reviewData)
    })
  },[])
  
   

    const {id}=useParams();
    console.log(id);
    console.log(reviews)
     let filteredReviews=reviews.filter(review=>{
      console.log(review.airline_id)
      
       return review.airline.id===parseInt(id)})
    return(
        <>
        <h1>Reviews</h1>
       
        <Link  to="/airlines"><button>Go Back</button></Link>
    
        { filteredReviews.map((review)=>{
  return (
    <ReviewCard key={review.id} id={review.id} review={review} /> 
  );
})}
     

        
        </>
    )
}
export default Reviews;