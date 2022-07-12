import { useState,useEffect } from "react";
import {useHistory,useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
function Reviews(){

    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch("/reviews")
        .then(res=>res.json())
        .then(reviewData=>{
         setReviews(reviewData)
         })
       },[])

       const {id}=useParams();
       let filteredReviews=reviews.filter(review=>review.airline_id===parseInt(id))


    return(
        <>
        <h1>Reviews</h1>
        <Link  to="/airlines"><button>Back</button></Link>
        { filteredReviews.map((review)=>{
  return (
    <ReviewCard key={review.id} review={review} /> 
  );
})}
     
      

        
        </>
    )
}
export default Reviews;