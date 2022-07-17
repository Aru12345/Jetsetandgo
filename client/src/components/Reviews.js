
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useState,useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import "./Styling.css"
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

  function handleDelete(id){
    let newReviews=reviews.filter(r=>r.id !== id)
    setReviews(newReviews)
  }
  return (
    <>
    <div className="reviewb">
    <Button className="reviewbuttons" variant="danger" href={"/airlines"} >Go Back</Button>
    <Button  className="reviewbuttons" variant="info" href={`/airlines/${id}/reviews/new`} >Add a Review</Button>
    </div>
      {filteredReviews.map((review) => {
        return (
          <ReviewCard key={review.id} id={review.id} review={review}  handleDelete={handleDelete} /> 
        )
      })}
    </>
  )
}

export default Reviews;