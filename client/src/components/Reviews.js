
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useState,useEffect } from "react";


const Reviews = ({reviews, setReviews,onDeleteReview}) => {

  const { id } = useParams();

  useEffect(()=>{
    fetch("/reviews")
    .then(res=>res.json())
    .then(reviewData=>{
      setReviews(reviewData)
    })
  },[])

  function handleAddReviews(newReview){
    console.log("in handle add review", newReview)
    setReviews([...reviews,newReview]);
  }

console.log(reviews)
  let filteredReviews = reviews.filter(review => {

    if(review.airline?.id) {
      return review.airline.id === parseInt(id);
    }

    return null;
  })

  return (
    <>
    <h1>Reviews</h1>
    <Link  to="/airlines"><button>Go Back</button></Link>
    <Link to={`/airlines/${id}/reviews/new`}><button>Add a Review</button></Link>
      {filteredReviews.map((review) => {
        return (
          <ReviewCard key={review.id} id={review.id} review={review}  onDeleteReview={onDeleteReview} /> 
        )
      })}
    </>
  )
}

export default Reviews;