import {useParams} from "react-router-dom"
import ReviewCard from "./ReviewCard";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import "./Styling.css"
const Reviews = ({reviews, setReviews,onUpdateReview,user}) => {

  const { id } = useParams();

  useEffect(()=>{
    fetch("/reviews")
    .then(res=>res.json())
    .then(reviewData=>{
      setReviews(reviewData)
    })
  },[])


  function handleDelete(reviewtodelete){
   const newReviews=reviews.filter(r=>r.id !== reviewtodelete)
    setReviews(newReviews)
    
  }

  let filteredReviews = reviews.filter(review => {
    if(review.airline?.id) {
      return review.airline.id === parseInt(id);
    }
    return null;
  })
  
  return (
    <>
    <div className="reviewb">
    <Button className="reviewbuttons" variant="danger" href={"/airlines"} >Go Back</Button>
    <Button  className="reviewbuttons" variant="info" href={`/airlines/${id}/reviews/new`} >Add a Review</Button>
    </div>
      {filteredReviews.map((review) => {
        return (
          <ReviewCard key={review.id} id={review.id} review={review} handleDelete={handleDelete} onUpdateReview={onUpdateReview} user={user} /> 
        )
      })}
    </>
  )
}

export default Reviews;